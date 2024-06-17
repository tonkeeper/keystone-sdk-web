"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExtraData = void 0;
const OKX_CHAIN_ID = {
    60: 1 // ETH
};
const generateExtraData = (coinType) => {
    var _a;
    return ({
        okx: {
            chainId: (_a = OKX_CHAIN_ID[coinType]) !== null && _a !== void 0 ? _a : coinType
        }
    });
};
exports.generateExtraData = generateExtraData;
