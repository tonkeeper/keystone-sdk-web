"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneEthereumSDK = void 0;
const bc_ur_registry_eth_1 = require("@keystonehq/bc-ur-registry-eth");
const utils_1 = require("../utils");
const ur_1 = require("../types/ur");
class KeystoneEthereumSDK {
    constructor(config) {
        this.config = config;
    }
    parseSignature(ur) {
        if (ur.type !== ur_1.URType.EthSignature) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_eth_1.ETHSignature.fromCBOR(ur.cbor);
        const requestId = sig.getRequestId();
        return {
            requestId: requestId === undefined ? undefined : (0, utils_1.uuidStringify)(requestId),
            signature: (0, utils_1.toHex)(sig.getSignature()),
            origin: sig.getOrigin()
        };
    }
    generateSignRequest({ requestId, signData, dataType, path, xfp, chainId, address, origin }) {
        var _a;
        return new bc_ur_registry_eth_1.EthSignRequest({
            requestId: (0, utils_1.uuidParse)(requestId),
            signData: (0, utils_1.toBuffer)(signData),
            dataType,
            derivationPath: new bc_ur_registry_eth_1.CryptoKeypath((0, utils_1.parsePath)(path).map(e => new bc_ur_registry_eth_1.PathComponent(e)), (0, utils_1.toBuffer)(xfp)),
            chainId,
            address: address !== undefined ? (0, utils_1.toBuffer)(address) : undefined,
            origin: origin !== null && origin !== void 0 ? origin : (_a = this.config) === null || _a === void 0 ? void 0 : _a.origin
        }).toUR();
    }
}
KeystoneEthereumSDK.DataType = bc_ur_registry_eth_1.DataType;
exports.KeystoneEthereumSDK = KeystoneEthereumSDK;
