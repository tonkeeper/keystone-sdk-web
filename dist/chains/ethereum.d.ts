import { type EthSignature } from '../types/signature';
import { DataType } from '@keystonehq/bc-ur-registry-eth';
import { type UR } from '../types/ur';
import { type EthSignRequestProps } from '../types/props';
import { type KeystoneSDKConfig } from '../types/config';
export declare class KeystoneEthereumSDK {
    static DataType: typeof DataType;
    config: KeystoneSDKConfig | undefined;
    constructor(config?: KeystoneSDKConfig);
    parseSignature(ur: UR): EthSignature;
    generateSignRequest({ requestId, signData, dataType, path, xfp, chainId, address, origin }: EthSignRequestProps): UR;
}
