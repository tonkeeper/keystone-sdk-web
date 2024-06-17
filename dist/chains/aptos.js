"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneAptosSDK = void 0;
const bc_ur_registry_aptos_1 = require("@keystonehq/bc-ur-registry-aptos");
const utils_1 = require("../utils");
const ur_1 = require("../types/ur");
class KeystoneAptosSDK {
    parseSignature(ur) {
        if (ur.type !== ur_1.URType.AptosSignature) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_aptos_1.AptosSignature.fromCBOR(ur.cbor);
        return {
            requestId: (0, utils_1.uuidStringify)(sig.getRequestId()),
            signature: (0, utils_1.toHex)(sig.getSignature()),
            authenticationPublicKey: (0, utils_1.toHex)(sig.getAuthenticationPublicKey())
        };
    }
    generateSignRequest({ requestId, signData, signType, accounts, origin }) {
        const authenticationKeyDerivationPaths = [];
        const keys = [];
        accounts.forEach(account => {
            authenticationKeyDerivationPaths.push(new bc_ur_registry_aptos_1.CryptoKeypath((0, utils_1.parsePath)(account.path).map(e => new bc_ur_registry_aptos_1.PathComponent(e)), (0, utils_1.toBuffer)(account.xfp)));
            account.key !== undefined && keys.push((0, utils_1.toBuffer)(account.key));
        });
        if (keys.length > 0 && keys.length !== authenticationKeyDerivationPaths.length) {
            throw new Error('account and path count must match');
        }
        return new bc_ur_registry_aptos_1.AptosSignRequest({
            requestId: (0, utils_1.uuidParse)(requestId),
            signData: (0, utils_1.toBuffer)(signData),
            signType,
            authenticationKeyDerivationPaths,
            accounts: keys,
            origin
        }).toUR();
    }
}
KeystoneAptosSDK.SignType = bc_ur_registry_aptos_1.SignType;
exports.KeystoneAptosSDK = KeystoneAptosSDK;
