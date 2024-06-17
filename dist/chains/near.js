"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneNearSDK = void 0;
const utils_1 = require("../utils");
const ur_1 = require("../types/ur");
const bc_ur_registry_near_1 = require("@keystonehq/bc-ur-registry-near");
class KeystoneNearSDK {
    parseSignature(ur) {
        if (ur.type !== ur_1.URType.NearSignature) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_near_1.NearSignature.fromCBOR(ur.cbor);
        const requestId = sig.getRequestId();
        return {
            requestId: requestId === undefined ? undefined : (0, utils_1.uuidStringify)(requestId),
            signature: sig.getSignature().map(e => (0, utils_1.toHex)(e))
        };
    }
    generateSignRequest({ requestId, signData, path, xfp, account, origin }) {
        return new bc_ur_registry_near_1.NearSignRequest({
            requestId: (0, utils_1.uuidParse)(requestId),
            signData: signData.map(e => (0, utils_1.toBuffer)(e)),
            derivationPath: new bc_ur_registry_near_1.CryptoKeypath((0, utils_1.parsePath)(path).map(e => new bc_ur_registry_near_1.PathComponent(e)), (0, utils_1.toBuffer)(xfp)),
            account,
            origin
        }).toUR();
    }
}
exports.KeystoneNearSDK = KeystoneNearSDK;
