"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathToKeypath = void 0;
const bc_ur_registry_1 = require("@keystonehq/bc-ur-registry");
const pathToKeypath = (path) => {
    const paths = path.replace(/[m|M]\//, '').split('/');
    const pathComponents = paths.map(path => {
        const index = parseInt(path.replace("'", ''), 10);
        const isHardened = path.endsWith("'");
        return new bc_ur_registry_1.PathComponent({ index, hardened: isHardened });
    });
    return new bc_ur_registry_1.CryptoKeypath(pathComponents);
};
exports.pathToKeypath = pathToKeypath;
