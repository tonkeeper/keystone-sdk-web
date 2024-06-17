import { type UR } from '../types/ur';
import { SignDataType as DataType } from '@keystonehq/bc-ur-registry-evm';
import { type EvmSignRequestProps } from '../types/props';
import { type Signature } from '../types';
import { type KeystoneSDKConfig } from '../types/config';
export declare class KeystoneEvmSDK {
    static DataType: typeof DataType;
    config: KeystoneSDKConfig | undefined;
    constructor(config?: KeystoneSDKConfig);
    parseSignature(ur: UR): Signature;
    generateSignRequest({ requestId, signData, dataType, customChainIdentifier, account, origin }: EvmSignRequestProps): UR;
}
