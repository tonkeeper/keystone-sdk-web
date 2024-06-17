import { SignType } from '@keystonehq/bc-ur-registry-aptos';
import { type AptosSignature as AptosSignatureType } from '../types/signature';
import { type UR } from '../types/ur';
import { type AptosSignRequestProps } from '../types/props';
export declare class KeystoneAptosSDK {
    static SignType: typeof SignType;
    parseSignature(ur: UR): AptosSignatureType;
    generateSignRequest({ requestId, signData, signType, accounts, origin }: AptosSignRequestProps): UR;
}
