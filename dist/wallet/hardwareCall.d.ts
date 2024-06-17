import { Curve, DerivationAlgorithm } from '@keystonehq/bc-ur-registry';
import { type UR } from '@ngraveio/bc-ur';
export { Curve, DerivationAlgorithm };
export interface KeySchema {
    path: string;
    curve?: Curve;
    algo?: DerivationAlgorithm;
}
export interface KeyDerivationCallArgs {
    schemas: KeySchema[];
    origin?: string;
}
export declare const generateKeyDerivationCall: ({ schemas, origin }: KeyDerivationCallArgs) => UR;
