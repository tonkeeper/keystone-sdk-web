"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keystone = exports.TXCase = exports.Chain = void 0;
const pako_1 = __importDefault(require("pako"));
const ur_1 = require("../../types/ur");
const bc_ur_registry_keystone_1 = require("@keystonehq/bc-ur-registry-keystone");
const base_pb_1 = require("../../gen/protos/base_pb");
const payload_pb_1 = require("../../gen/protos/payload_pb");
const transaction_pb_1 = require("../../gen/protos/transaction_pb");
const ltc_transaction_pb_1 = require("../../gen/chains/keystone/protos/ltc_transaction_pb");
const bch_transaction_pb_1 = require("../../gen/chains/keystone/protos/bch_transaction_pb");
const dash_transaction_pb_1 = require("../../gen/chains/keystone/protos/dash_transaction_pb");
var Chain;
(function (Chain) {
    Chain["LTC"] = "LTC";
    Chain["BCH"] = "BCH";
    Chain["DASH"] = "DASH";
})(Chain = exports.Chain || (exports.Chain = {}));
var TXCase;
(function (TXCase) {
    TXCase["LTC"] = "ltcTx";
    TXCase["BCH"] = "bchTx";
    TXCase["DASH"] = "dashTx";
})(TXCase = exports.TXCase || (exports.TXCase = {}));
class Keystone {
    generateSignData({ chain, requestId, signData, xfp }) {
        let tx;
        let txCase;
        let coinCode;
        switch (chain) {
            case Chain.LTC:
                tx = new ltc_transaction_pb_1.LtcTx(Object.assign(Object.assign({}, signData), { fee: BigInt(signData.fee), dustThreshold: 5460 }));
                coinCode = Chain.LTC;
                txCase = TXCase.LTC;
                break;
            case Chain.BCH:
                tx = new bch_transaction_pb_1.BchTx(Object.assign(Object.assign({}, signData), { fee: BigInt(signData.fee), dustThreshold: 546 }));
                coinCode = Chain.BCH;
                txCase = TXCase.BCH;
                break;
            case Chain.DASH:
                tx = new dash_transaction_pb_1.DashTx(Object.assign(Object.assign({}, signData), { fee: BigInt(signData.fee), dustThreshold: 546 }));
                coinCode = Chain.DASH;
                txCase = TXCase.DASH;
                break;
            default:
                throw new Error('chain not support');
        }
        return pako_1.default.gzip(new base_pb_1.Base({
            version: 2,
            description: 'QrCode Protocol',
            deviceType: '',
            data: new payload_pb_1.Payload({
                xfp,
                type: payload_pb_1.Payload_Type.SIGN_TX,
                Content: {
                    case: 'signTx',
                    value: new transaction_pb_1.SignTransaction({
                        coinCode,
                        hdPath: '',
                        signId: requestId,
                        timestamp: BigInt(Date.now()),
                        decimal: 8,
                        Transaction: {
                            case: txCase,
                            value: tx
                        }
                    })
                }
            })
        }).toBinary());
    }
    generateSignRequest(props) {
        const signDataBytes = Buffer.from(this.generateSignData(props));
        return new bc_ur_registry_keystone_1.KeystoneSignRequest({
            signData: signDataBytes,
            origin: props.origin
        }).toUR();
    }
    parseSignResult(ur) {
        var _a, _b;
        if (ur.type !== ur_1.URType.KeystoneSignResult) {
            throw new Error('type not match');
        }
        const sig = bc_ur_registry_keystone_1.KeystoneSignResult.fromCBOR(ur.cbor);
        const base = base_pb_1.Base.fromBinary(pako_1.default.ungzip(sig.getSignResult()));
        if (((_a = base.data) === null || _a === void 0 ? void 0 : _a.Content.case) !== 'signTxResult') {
            throw new Error('invalid sign result');
        }
        const value = (_b = base.data) === null || _b === void 0 ? void 0 : _b.Content.value;
        const requestId = value.signId;
        return {
            requestId,
            rawData: value.rawTx
        };
    }
}
exports.Keystone = Keystone;
