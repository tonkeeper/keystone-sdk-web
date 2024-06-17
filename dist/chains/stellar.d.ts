import { type StellarSignature as StellarSignatureType } from '../types/signature';
import { type UR } from '../types/ur';
import { type StellarSignRequestProps } from '../types/props';
import { SignType } from '@keystonehq/bc-ur-registry-stellar';
export declare class KeystoneStellarSDK {
    static DataType: typeof SignType;
    parseSignature(ur: UR): StellarSignatureType;
    generateSignRequest({ requestId, signData, dataType, path, xfp, address, origin }: StellarSignRequestProps): UR;
}
