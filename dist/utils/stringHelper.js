"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePath = exports.uuidStringify = exports.uuidParse = exports.toBuffer = exports.toHex = exports.uuid = void 0;
const uuid = __importStar(require("uuid"));
exports.uuid = uuid;
__exportStar(require("./coin"), exports);
function toHex(buf) {
    return buf === undefined ? '' : Buffer.from(buf).toString('hex');
}
exports.toHex = toHex;
function toBuffer(hex) {
    return Buffer.from(hex !== null && hex !== void 0 ? hex : '', 'hex');
}
exports.toBuffer = toBuffer;
function uuidParse(id) {
    return Buffer.from(uuid.parse(id));
}
exports.uuidParse = uuidParse;
function uuidStringify(id) {
    return uuid.stringify(id);
}
exports.uuidStringify = uuidStringify;
function parsePath(path) {
    const chunks = path.replace(/^m\//i, '').split('/');
    return chunks.map(chunk => {
        const hardened = chunk.endsWith("'");
        return {
            index: Number(hardened ? chunk.substring(0, chunk.length - 1) : chunk),
            hardened
        };
    });
}
exports.parsePath = parsePath;
