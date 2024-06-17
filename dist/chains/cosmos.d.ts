import { type UR } from '../types/ur';
import { SignDataType as DataType } from '@keystonehq/bc-ur-registry-cosmos';
import { type CosmosSignature as CosmosSignatureType } from '../types/signature';
import { type CosmosSignRequestProps } from '../types/props';
import { type KeystoneSDKConfig } from '../types/config';
export declare class KeystoneCosmosSDK {
    static DataType: typeof DataType;
    config: KeystoneSDKConfig | undefined;
    constructor(config?: KeystoneSDKConfig);
    parseSignature(ur: UR): CosmosSignatureType;
    generateSignRequest({ requestId, signData, dataType, accounts, origin }: CosmosSignRequestProps): UR;
}
