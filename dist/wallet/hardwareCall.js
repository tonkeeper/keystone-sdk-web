"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKeyDerivationCall = exports.DerivationAlgorithm = exports.Curve = void 0;
const bc_ur_registry_1 = require("@keystonehq/bc-ur-registry");
Object.defineProperty(exports, "Curve", { enumerable: true, get: function () { return bc_ur_registry_1.Curve; } });
Object.defineProperty(exports, "DerivationAlgorithm", { enumerable: true, get: function () { return bc_ur_registry_1.DerivationAlgorithm; } });
const utils_1 = require("../utils");
const generateKeyDerivationCall = ({ schemas, origin }) => {
    const keyDerivationSchemas = schemas.map(({ path, curve = bc_ur_registry_1.Curve.secp256k1, algo = bc_ur_registry_1.DerivationAlgorithm.slip10 }) => {
        if (curve === bc_ur_registry_1.Curve.secp256k1 && algo === bc_ur_registry_1.DerivationAlgorithm.bip32ed25519) {
            throw new Error('the combination of the given curve and algo not supported');
        }
        return new bc_ur_registry_1.KeyDerivationSchema((0, utils_1.pathToKeypath)(path), curve, algo);
    });
    const keyDerivation = new bc_ur_registry_1.KeyDerivation(keyDerivationSchemas);
    const hardwareCall = new bc_ur_registry_1.QRHardwareCall(bc_ur_registry_1.QRHardwareCallType.KeyDerivation, keyDerivation, origin);
    return hardwareCall.toUR();
};
exports.generateKeyDerivationCall = generateKeyDerivationCall;
