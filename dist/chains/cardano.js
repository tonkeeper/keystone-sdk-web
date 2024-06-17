"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneCardanoSDK = void 0;
const bc_ur_registry_cardano_1 = require("@keystonehq/bc-ur-registry-cardano");
const utils_1 = require("../utils");
const ur_1 = require("../types/ur");
class KeystoneCardanoSDK {
    parseSignature(ur) {
        if (ur.type !== ur_1.URType.CardanoSignature) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_cardano_1.CardanoSignature.fromCBOR(ur.cbor);
        const requestId = sig.getRequestId();
        return {
            requestId: Buffer.isBuffer(requestId) ? (0, utils_1.uuidStringify)(requestId) : '',
            witnessSet: (0, utils_1.toHex)(sig.getWitnessSet())
        };
    }
    generateSignRequest({ signData, utxos, extraSigners, requestId, origin }) {
        return bc_ur_registry_cardano_1.CardanoSignRequest.constructCardanoSignRequest(signData, utxos, extraSigners, requestId, origin).toUR();
    }
}
exports.KeystoneCardanoSDK = KeystoneCardanoSDK;
