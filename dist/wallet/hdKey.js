"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTonAccount = exports.parseHDKey = void 0;
const types_1 = require("../types");
const bc_ur_registry_1 = require("@keystonehq/bc-ur-registry");
const utils_1 = require("../utils");
const accountHelper_1 = require("./accountHelper");
const parseHDKey = (ur) => {
    var _a;
    if (ur.type !== types_1.URType.CryptoHDKey) {
        throw new Error("type not match");
    }
    const hdKey = bc_ur_registry_1.CryptoHDKey.fromCBOR(ur.cbor);
    const chainCode = (0, utils_1.toHex)(hdKey.getChainCode());
    const parentFingerprint = (0, utils_1.toHex)(hdKey.getParentFingerprint());
    const origin = hdKey.getOrigin();
    const xfp = (_a = hdKey.getOrigin().getSourceFingerprint()) === null || _a === void 0 ? void 0 : _a.toString("hex");
    if (xfp === undefined) {
        throw new Error("HDKey is invalid");
    }
    let extendedPublicKey;
    if (chainCode.length !== 0 && parentFingerprint.length !== 0) {
        extendedPublicKey = hdKey.getBip32Key();
    }
    const coinType = origin.getComponents()[1].getIndex();
    return {
        chain: (0, utils_1.getCoinSymbol)(coinType),
        path: `m/${origin.getPath()}`,
        publicKey: (0, utils_1.toHex)(hdKey.getKey()),
        name: hdKey.getName(),
        xfp: origin.getSourceFingerprint().toString("hex"),
        chainCode,
        extendedPublicKey,
        note: hdKey.getNote(),
        extra: (0, accountHelper_1.generateExtraData)(coinType),
    };
};
exports.parseHDKey = parseHDKey;
const parseTonAccount = (ur) => {
    var _a;
    if (ur.type !== types_1.URType.CryptoHDKey) {
        throw new Error("type not match");
    }
    const hdKey = bc_ur_registry_1.CryptoHDKey.fromCBOR(ur.cbor);
    const origin = hdKey.getOrigin();
    if (!!origin) {
        const xfp = (_a = hdKey.getOrigin().getSourceFingerprint()) === null || _a === void 0 ? void 0 : _a.toString("hex");
        if (xfp === undefined) {
            throw new Error("HDKey is invalid");
        }
        //it's a bip39 style mnemonic so the ton key is derived by the path;
        return {
            path: `m/${origin.getPath()}`,
            publicKey: (0, utils_1.toHex)(hdKey.getKey()),
            name: hdKey.getName(),
            xfp: origin.getSourceFingerprint().toString("hex"),
        };
    }
    else {
        //it's a ton style mnemonic so it doesn't need path and xfp;
        return {
            publicKey: (0, utils_1.toHex)(hdKey.getKey()),
            name: hdKey.getName(),
        };
    }
};
exports.parseTonAccount = parseTonAccount;
