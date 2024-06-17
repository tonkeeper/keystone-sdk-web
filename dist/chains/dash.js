"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneDashSDK = void 0;
const keystone_1 = require("./keystone");
class KeystoneDashSDK extends keystone_1.Keystone {
    generateSignRequest(props) {
        return super.generateSignRequest(Object.assign({ chain: keystone_1.Chain.DASH }, props));
    }
}
exports.KeystoneDashSDK = KeystoneDashSDK;
