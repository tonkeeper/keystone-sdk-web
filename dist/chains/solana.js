"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneSolanaSDK = void 0;
const bc_ur_registry_sol_1 = require("@keystonehq/bc-ur-registry-sol");
const utils_1 = require("../utils");
const ur_1 = require("../types/ur");
class KeystoneSolanaSDK {
    parseSignature(ur) {
        if (ur.type !== ur_1.URType.SolSignature) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_sol_1.SolSignature.fromCBOR(ur.cbor);
        const requestId = sig.getRequestId();
        return {
            requestId: requestId === undefined ? undefined : (0, utils_1.uuidStringify)(requestId),
            signature: (0, utils_1.toHex)(sig.getSignature())
        };
    }
    generateSignRequest({ requestId, signData, dataType, path, xfp, address, origin }) {
        return new bc_ur_registry_sol_1.SolSignRequest({
            requestId: (0, utils_1.uuidParse)(requestId),
            signData: (0, utils_1.toBuffer)(signData),
            signType: dataType,
            derivationPath: new bc_ur_registry_sol_1.CryptoKeypath((0, utils_1.parsePath)(path).map(e => new bc_ur_registry_sol_1.PathComponent(e)), (0, utils_1.toBuffer)(xfp)),
            address: address !== undefined ? (0, utils_1.toBuffer)(address) : undefined,
            origin
        }).toUR();
    }
}
KeystoneSolanaSDK.DataType = bc_ur_registry_sol_1.SignType;
exports.KeystoneSolanaSDK = KeystoneSolanaSDK;
