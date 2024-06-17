import { SignType } from '@keystonehq/bc-ur-registry-sol';
import { type SolSignature as SolSignatureType } from '../types/signature';
import { type UR } from '../types/ur';
import { type SolSignRequestProps } from '../types/props';
export declare class KeystoneSolanaSDK {
    static DataType: typeof SignType;
    parseSignature(ur: UR): SolSignatureType;
    generateSignRequest({ requestId, signData, dataType, path, xfp, address, origin }: SolSignRequestProps): UR;
}
