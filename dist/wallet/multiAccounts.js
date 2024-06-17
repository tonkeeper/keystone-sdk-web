"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMultiAccounts = void 0;
const types_1 = require("../types");
const bc_ur_registry_1 = require("@keystonehq/bc-ur-registry");
const utils_1 = require("../utils");
const accountHelper_1 = require("./accountHelper");
const parseMultiAccounts = (ur) => {
    if (ur.type !== types_1.URType.CryptoMultiAccounts) {
        throw new Error('type not match');
    }
    const accounts = bc_ur_registry_1.CryptoMultiAccounts.fromCBOR(ur.cbor);
    const masterFingerprint = (0, utils_1.toHex)(accounts.getMasterFingerprint());
    return {
        device: accounts.getDevice(),
        masterFingerprint,
        keys: accounts.getKeys().map(key => {
            const chainCode = (0, utils_1.toHex)(key.getChainCode());
            const parentFingerprint = (0, utils_1.toHex)(key.getParentFingerprint());
            const origin = key.getOrigin();
            if (origin === undefined) {
                throw new Error('multi accounts is invalid');
            }
            let extendedPublicKey;
            if (chainCode.length !== 0 && parentFingerprint.length !== 0) {
                extendedPublicKey = key.getBip32Key();
            }
            const coinType = origin.getComponents()[1].getIndex();
            return {
                chain: (0, utils_1.getCoinSymbol)(coinType),
                path: `m/${origin.getPath()}`,
                publicKey: (0, utils_1.toHex)(key.getKey()),
                name: key.getName(),
                chainCode,
                extendedPublicKey,
                note: key.getNote(),
                extra: (0, accountHelper_1.generateExtraData)(coinType)
            };
        }),
        deviceId: accounts.getDeviceId(),
        deviceVersion: accounts.getVersion()
    };
};
exports.parseMultiAccounts = parseMultiAccounts;
