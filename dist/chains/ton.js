"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneTonSDK = void 0;
const bc_ur_registry_ton_1 = require("@keystonehq/bc-ur-registry-ton");
const utils_1 = require("../utils");
const ur_1 = require("../types/ur");
class KeystoneTonSDK {
    constructor(config) {
        this.config = config;
    }
    parseSignature(ur) {
        if (ur.type !== ur_1.URType.TonSignature) {
            throw new Error("type not match");
        }
        const sig = bc_ur_registry_ton_1.TonSignature.fromCBOR(ur.cbor);
        const requestId = sig.getRequestId();
        return {
            requestId: Buffer.isBuffer(requestId) ? (0, utils_1.uuidStringify)(requestId) : "",
            signature: (0, utils_1.toHex)(sig.getSignature()),
            origin: sig.getOrigin(),
        };
    }
    generateSignRequest({ requestId, signData, dataType, xfp, derivationPath, address, }) {
        var _a;
        return bc_ur_registry_ton_1.TonSignRequest.constructTonRequest((0, utils_1.toBuffer)(signData), dataType, address, requestId, (_a = this.config) === null || _a === void 0 ? void 0 : _a.origin, xfp, derivationPath).toUR();
    }
}
KeystoneTonSDK.DataType = bc_ur_registry_ton_1.DataType;
exports.KeystoneTonSDK = KeystoneTonSDK;
