"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneArweaveSDK = void 0;
const utils_1 = require("../utils");
const ur_1 = require("../types/ur");
const bc_ur_registry_arweave_1 = require("@keystonehq/bc-ur-registry-arweave");
class KeystoneArweaveSDK {
    parseAccount(ur) {
        if (ur.type !== ur_1.URType.ArweaveCryptoAccount) {
            throw new Error('type not match');
        }
        const account = bc_ur_registry_arweave_1.ArweaveCryptoAccount.fromCBOR(ur.cbor);
        return {
            masterFingerprint: (0, utils_1.toHex)(account.getMasterFingerprint()),
            keyData: (0, utils_1.toHex)(account.getKeyData()),
            device: account.getDevice()
        };
    }
    parseSignature(ur) {
        if (ur.type !== ur_1.URType.ArweaveSignature) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_arweave_1.ArweaveSignature.fromCBOR(ur.cbor);
        const requestId = sig.getRequestId();
        return {
            requestId: (0, utils_1.uuidStringify)(requestId),
            signature: (0, utils_1.toHex)(sig.getSignature())
        };
    }
    generateSignRequest({ requestId, signData, signType, saltLen, masterFingerprint, account, origin }) {
        return new bc_ur_registry_arweave_1.ArweaveSignRequest({
            requestId: (0, utils_1.uuidParse)(requestId),
            signData: (0, utils_1.toBuffer)(signData),
            signType,
            saltLen,
            masterFingerprint: (0, utils_1.toBuffer)(masterFingerprint),
            account: account !== undefined ? (0, utils_1.toBuffer)(account) : undefined,
            origin
        }).toUR();
    }
}
KeystoneArweaveSDK.SignType = bc_ur_registry_arweave_1.SignType;
KeystoneArweaveSDK.SaltLen = bc_ur_registry_arweave_1.SaltLen;
exports.KeystoneArweaveSDK = KeystoneArweaveSDK;
