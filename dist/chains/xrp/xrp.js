"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneXrpSDK = void 0;
const bc_ur_1 = require("@ngraveio/bc-ur");
const ripple_binary_codec_1 = require("ripple-binary-codec");
class KeystoneXrpSDK {
    parseAccount(ur) {
        const accountInfo = ur.decodeCBOR().toString();
        return JSON.parse(accountInfo);
    }
    parseSignature(ur) {
        if (ur.type !== 'bytes') {
            throw new Error('type not match');
        }
        try {
            const signedTxHex = ur.decodeCBOR().toString('hex');
            const signedTx = (0, ripple_binary_codec_1.decode)(signedTxHex);
            return signedTx.TxnSignature;
        }
        catch (e) {
            throw new Error('signature is invalid');
        }
    }
    generateSignRequest(tx) {
        const txStr = JSON.stringify(tx);
        return bc_ur_1.UR.fromBuffer(Buffer.from(txStr));
    }
}
exports.KeystoneXrpSDK = KeystoneXrpSDK;
