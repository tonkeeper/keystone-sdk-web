"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneEvmSDK = void 0;
const utils_1 = require("../utils");
const ur_1 = require("../types/ur");
const bc_ur_registry_evm_1 = require("@keystonehq/bc-ur-registry-evm");
class KeystoneEvmSDK {
    constructor(config) {
        this.config = config;
    }
    parseSignature(ur) {
        if (ur.type !== ur_1.URType.EvmSignature) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_evm_1.EvmSignature.fromCBOR(ur.cbor);
        const requestId = (0, utils_1.uuidStringify)(sig.getRequestId());
        return {
            requestId,
            signature: (0, utils_1.toHex)(sig.getSignature())
        };
    }
    generateSignRequest({ requestId, signData, dataType, customChainIdentifier, account, origin }) {
        var _a;
        const derivationPath = new bc_ur_registry_evm_1.CryptoKeypath((0, utils_1.parsePath)(account.path).map(e => new bc_ur_registry_evm_1.PathComponent(e)), (0, utils_1.toBuffer)(account.xfp));
        return new bc_ur_registry_evm_1.EvmSignRequest({
            signData: (0, utils_1.toBuffer)(signData),
            dataType,
            customChainIdentifier,
            derivationPath,
            requestId: (0, utils_1.uuidParse)(requestId),
            address: account.address !== undefined ? (0, utils_1.toBuffer)(account.address.substring(account.address.startsWith('0x') ? 2 : 0)) : undefined,
            origin: origin !== null && origin !== void 0 ? origin : (_a = this.config) === null || _a === void 0 ? void 0 : _a.origin
        }).toUR();
    }
}
KeystoneEvmSDK.DataType = bc_ur_registry_evm_1.SignDataType;
exports.KeystoneEvmSDK = KeystoneEvmSDK;
