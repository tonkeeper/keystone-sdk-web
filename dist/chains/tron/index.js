"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneTronSDK = void 0;
const utils_1 = require("../../utils");
const ur_1 = require("../../types/ur");
const transfer_1 = require("./transfer");
const pako_1 = __importDefault(require("pako"));
const base_pb_1 = require("../../gen/protos/base_pb");
const payload_pb_1 = require("../../gen/protos/payload_pb");
const transaction_pb_1 = require("../../gen/protos/transaction_pb");
const bc_ur_registry_keystone_1 = require("@keystonehq/bc-ur-registry-keystone");
class KeystoneTronSDK {
    parseSignature(ur) {
        var _a, _b;
        if (ur.type !== ur_1.URType.KeystoneSignResult) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_keystone_1.KeystoneSignResult.fromCBOR(ur.cbor);
        const base = base_pb_1.Base.fromBinary(pako_1.default.ungzip(sig.getSignResult()));
        if (((_a = base.data) === null || _a === void 0 ? void 0 : _a.Content.case) !== 'signTxResult') {
            throw new Error('invalid sign result');
        }
        const { signId, rawTx } = (_b = base.data) === null || _b === void 0 ? void 0 : _b.Content.value;
        return {
            requestId: signId,
            raw: rawTx
        };
    }
    generateSignRequest({ requestId, signData, path, xfp, tokenInfo, origin }) {
        const tronTx = (0, transfer_1.raw2tx)((0, utils_1.toBuffer)(signData), tokenInfo);
        const signDataBytes = pako_1.default.gzip(new base_pb_1.Base({
            version: 2,
            description: 'QrCode Protocol',
            deviceType: '',
            data: new payload_pb_1.Payload({
                xfp,
                type: payload_pb_1.Payload_Type.SIGN_TX,
                Content: {
                    case: 'signTx',
                    value: new transaction_pb_1.SignTransaction({
                        coinCode: 'TRON',
                        hdPath: path,
                        signId: requestId,
                        timestamp: BigInt(Date.now()),
                        decimal: 6,
                        Transaction: {
                            case: 'tronTx',
                            value: tronTx
                        }
                    })
                }
            })
        }).toBinary());
        return new bc_ur_registry_keystone_1.KeystoneSignRequest({
            signData: Buffer.from(signDataBytes),
            origin
        }).toUR();
    }
}
exports.KeystoneTronSDK = KeystoneTronSDK;
