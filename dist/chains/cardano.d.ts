import { type CardanoSignature } from '../types/signature';
import { type UR } from '../types/ur';
import { type CardanoSignRequestProps } from '../types/props';
export declare class KeystoneCardanoSDK {
    parseSignature(ur: UR): CardanoSignature;
    generateSignRequest({ signData, utxos, extraSigners, requestId, origin }: CardanoSignRequestProps): UR;
}
