"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneSuiSDK = void 0;
const bc_ur_registry_sui_1 = require("@keystonehq/bc-ur-registry-sui");
const utils_1 = require("../utils");
const ur_1 = require("../types/ur");
class KeystoneSuiSDK {
    parseSignature(ur) {
        if (ur.type !== ur_1.URType.SuiSignature) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_sui_1.SuiSignature.fromCBOR(ur.cbor);
        const requestId = sig.getRequestId();
        return {
            requestId: Buffer.isBuffer(requestId) ? (0, utils_1.uuidStringify)(requestId) : '',
            signature: (0, utils_1.toHex)(sig.getSignature()),
            publicKey: (0, utils_1.toHex)(sig.getPublicKey())
        };
    }
    generateSignRequest({ requestId, intentMessage, accounts, origin }) {
        const derivationPaths = [];
        const addresses = [];
        accounts.forEach(account => {
            derivationPaths.push(new bc_ur_registry_sui_1.CryptoKeypath((0, utils_1.parsePath)(account.path).map(e => new bc_ur_registry_sui_1.PathComponent(e)), (0, utils_1.toBuffer)(account.xfp)));
            account.address !== undefined && addresses.push((0, utils_1.toBuffer)(account.address.startsWith('0x') ? account.address.substring(2) : account.address));
        });
        if (addresses.length > 0 && addresses.length !== derivationPaths.length) {
            throw new Error('address and path count must match');
        }
        return new bc_ur_registry_sui_1.SuiSignRequest({
            requestId: (0, utils_1.uuidParse)(requestId),
            intentMessage: (0, utils_1.toBuffer)(intentMessage),
            derivationPaths,
            addresses,
            origin
        }).toUR();
    }
}
exports.KeystoneSuiSDK = KeystoneSuiSDK;
