import { type Signature } from '../types/signature';
import { type UR } from '../types/ur';
import { type ArweaveSignRequestProps } from '../types/props';
import { type ArweaveAccount } from '../types/account';
import { SaltLen, SignType } from '@keystonehq/bc-ur-registry-arweave';
export declare class KeystoneArweaveSDK {
    static SignType: typeof SignType;
    static SaltLen: typeof SaltLen;
    parseAccount(ur: UR): ArweaveAccount;
    parseSignature(ur: UR): Signature;
    generateSignRequest({ requestId, signData, signType, saltLen, masterFingerprint, account, origin }: ArweaveSignRequestProps): UR;
}
