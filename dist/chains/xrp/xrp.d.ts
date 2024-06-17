import { UR } from '@ngraveio/bc-ur';
import { type XrpAccount, type XrpTransaction } from './types';
export declare class KeystoneXrpSDK {
    parseAccount(ur: UR): XrpAccount;
    parseSignature(ur: UR): string;
    generateSignRequest(tx: XrpTransaction): UR;
}
