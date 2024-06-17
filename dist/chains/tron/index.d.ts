import { type UR } from '../../types/ur';
import { type TronSignature, type TronSignRequestProps } from '../../types';
export declare class KeystoneTronSDK {
    parseSignature(ur: UR): TronSignature;
    generateSignRequest({ requestId, signData, path, xfp, tokenInfo, origin }: TronSignRequestProps): UR;
}
