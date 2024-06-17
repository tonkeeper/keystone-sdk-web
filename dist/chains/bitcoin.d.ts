/// <reference types="node" />
import { DataType } from '@keystonehq/bc-ur-registry-btc';
import { type UR } from '../types/ur';
import { type BtcSignRequestProps, type BtcSignature as BtcSignatureType } from '../types';
import { type KeystoneSDKConfig } from '../types/config';
export declare class KeystoneBitcoinSDK {
    static DataType: typeof DataType;
    config: KeystoneSDKConfig | undefined;
    constructor(config?: KeystoneSDKConfig);
    parsePSBT(ur: UR): string;
    generatePSBT(psbt: Buffer): UR;
    generateSignRequest({ requestId, signData, dataType, accounts, origin }: BtcSignRequestProps): UR;
    parseSignature(ur: UR): BtcSignatureType;
}
