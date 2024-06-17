"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneStellarSDK = void 0;
const utils_1 = require("../utils");
const ur_1 = require("../types/ur");
const bc_ur_registry_stellar_1 = require("@keystonehq/bc-ur-registry-stellar");
class KeystoneStellarSDK {
    parseSignature(ur) {
        if (ur.type !== ur_1.URType.StellarSignature) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_stellar_1.StellarSignature.fromCBOR(ur.cbor);
        const requestId = sig.getRequestId();
        return {
            requestId: requestId === undefined ? undefined : (0, utils_1.uuidStringify)(requestId),
            signature: (0, utils_1.toHex)(sig.getSignature())
        };
    }
    generateSignRequest({ requestId, signData, dataType, path, xfp, address, origin }) {
        return new bc_ur_registry_stellar_1.StellarSignRequest({
            requestId: (0, utils_1.uuidParse)(requestId),
            signData: (0, utils_1.toBuffer)(signData),
            signType: dataType,
            derivationPath: new bc_ur_registry_stellar_1.CryptoKeypath((0, utils_1.parsePath)(path).map(e => new bc_ur_registry_stellar_1.PathComponent(e)), (0, utils_1.toBuffer)(xfp)),
            address: address !== undefined ? (0, utils_1.toBuffer)(address) : undefined,
            origin
        }).toUR();
    }
}
KeystoneStellarSDK.DataType = bc_ur_registry_stellar_1.SignType;
exports.KeystoneStellarSDK = KeystoneStellarSDK;
