import { DataType } from "@keystonehq/bc-ur-registry-ton";
import { type TonSignature as TonSignatureType } from "../types/signature";
import { type UR } from "../types/ur";
import { type TonSignRequestProps } from "../types/props";
import { type KeystoneSDKConfig } from "../types/config";
export declare class KeystoneTonSDK {
    static DataType: typeof DataType;
    config: KeystoneSDKConfig | undefined;
    constructor(config?: KeystoneSDKConfig);
    parseSignature(ur: UR): TonSignatureType;
    generateSignRequest({ requestId, signData, dataType, xfp, derivationPath, address, }: TonSignRequestProps): UR;
}
