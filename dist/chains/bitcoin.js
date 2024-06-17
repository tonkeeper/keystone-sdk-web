"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneBitcoinSDK = void 0;
const bc_ur_registry_1 = require("@keystonehq/bc-ur-registry");
const bc_ur_registry_btc_1 = require("@keystonehq/bc-ur-registry-btc");
const utils_1 = require("../utils");
const ur_1 = require("../types/ur");
class KeystoneBitcoinSDK {
    constructor(config) {
        this.config = config;
    }
    parsePSBT(ur) {
        if (ur.type !== ur_1.URType.CryptoPSBT) {
            throw new Error('type not match');
        }
        return (0, utils_1.toHex)(bc_ur_registry_1.CryptoPSBT.fromCBOR(ur.cbor).getPSBT());
    }
    generatePSBT(psbt) {
        return new bc_ur_registry_1.CryptoPSBT(psbt).toUR();
    }
    generateSignRequest({ requestId, signData, dataType, accounts, origin }) {
        var _a;
        const derivationPaths = [];
        const addresses = [];
        accounts.forEach(account => {
            var _a;
            derivationPaths.push(new bc_ur_registry_btc_1.CryptoKeypath((0, utils_1.parsePath)(account.path).map(e => new bc_ur_registry_btc_1.PathComponent(e)), (0, utils_1.toBuffer)(account.xfp)));
            addresses.push((_a = account.address) !== null && _a !== void 0 ? _a : '');
        });
        return new bc_ur_registry_btc_1.BtcSignRequest({
            signData: (0, utils_1.toBuffer)(signData),
            dataType,
            derivationPaths,
            requestId: (0, utils_1.uuidParse)(requestId),
            addresses,
            origin: origin !== null && origin !== void 0 ? origin : (_a = this.config) === null || _a === void 0 ? void 0 : _a.origin
        }).toUR();
    }
    parseSignature(ur) {
        if (ur.type !== ur_1.URType.BtcSignature) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_btc_1.BtcSignature.fromCBOR(ur.cbor);
        const requestId = (0, utils_1.uuidStringify)(sig.getRequestId());
        return {
            requestId,
            signature: (0, utils_1.toHex)(sig.getSignature()),
            publicKey: (0, utils_1.toHex)(sig.getPublicKey())
        };
    }
}
KeystoneBitcoinSDK.DataType = bc_ur_registry_btc_1.DataType;
exports.KeystoneBitcoinSDK = KeystoneBitcoinSDK;
