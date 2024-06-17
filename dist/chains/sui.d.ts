import { type SuiSignature as SuiSignatureType } from '../types/signature';
import { type UR } from '../types/ur';
import { type SuiSignRequestProps } from '../types/props';
export declare class KeystoneSuiSDK {
    parseSignature(ur: UR): SuiSignatureType;
    generateSignRequest({ requestId, intentMessage, accounts, origin }: SuiSignRequestProps): UR;
}
