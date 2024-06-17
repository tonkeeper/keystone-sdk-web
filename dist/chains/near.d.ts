import { type NearSignature as NearSignatureType } from '../types/signature';
import { type UR } from '../types/ur';
import { type NearSignRequestProps } from '../types/props';
export declare class KeystoneNearSDK {
    parseSignature(ur: UR): NearSignatureType;
    generateSignRequest({ requestId, signData, path, xfp, account, origin }: NearSignRequestProps): UR;
}
