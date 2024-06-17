"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneLitecoinSDK = void 0;
const keystone_1 = require("./keystone");
class KeystoneLitecoinSDK extends keystone_1.Keystone {
    generateSignRequest(props) {
        return super.generateSignRequest(Object.assign({ chain: keystone_1.Chain.LTC }, props));
    }
}
exports.KeystoneLitecoinSDK = KeystoneLitecoinSDK;
