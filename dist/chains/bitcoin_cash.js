"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneBitcoinCashSDK = void 0;
const keystone_1 = require("./keystone");
class KeystoneBitcoinCashSDK extends keystone_1.Keystone {
    generateSignRequest(props) {
        return super.generateSignRequest(Object.assign({ chain: keystone_1.Chain.BCH }, props));
    }
}
exports.KeystoneBitcoinCashSDK = KeystoneBitcoinCashSDK;
