"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneCosmosSDK = void 0;
const utils_1 = require("../utils");
const ur_1 = require("../types/ur");
const bc_ur_registry_cosmos_1 = require("@keystonehq/bc-ur-registry-cosmos");
class KeystoneCosmosSDK {
    constructor(config) {
        this.config = config;
    }
    parseSignature(ur) {
        if (ur.type !== ur_1.URType.CosmosSignature) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_cosmos_1.CosmosSignature.fromCBOR(ur.cbor);
        const requestId = (0, utils_1.uuidStringify)(sig.getRequestId());
        return {
            requestId,
            signature: (0, utils_1.toHex)(sig.getSignature()),
            publicKey: (0, utils_1.toHex)(sig.getPublicKey())
        };
    }
    generateSignRequest({ requestId, signData, dataType, accounts, origin }) {
        var _a;
        const derivationPaths = [];
        const addresses = [];
        accounts.forEach(account => {
            derivationPaths.push(new bc_ur_registry_cosmos_1.CryptoKeypath((0, utils_1.parsePath)(account.path).map(e => new bc_ur_registry_cosmos_1.PathComponent(e)), (0, utils_1.toBuffer)(account.xfp)));
            addresses.push(account.address);
        });
        return new bc_ur_registry_cosmos_1.CosmosSignRequest({
            signData: (0, utils_1.toBuffer)(signData),
            dataType,
            derivationPaths,
            requestId: (0, utils_1.uuidParse)(requestId),
            addresses,
            origin: origin !== null && origin !== void 0 ? origin : (_a = this.config) === null || _a === void 0 ? void 0 : _a.origin
        }).toUR();
    }
}
KeystoneCosmosSDK.DataType = bc_ur_registry_cosmos_1.SignDataType;
exports.KeystoneCosmosSDK = KeystoneCosmosSDK;
