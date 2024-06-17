import { type UR } from '../../types/ur';
import { type KeystoneSignRequestProps } from '../../types/props';
import { type KeystoneSignResult as KeystoneSignResultType } from '../../types/signature';
export declare enum Chain {
    LTC = "LTC",
    BCH = "BCH",
    DASH = "DASH"
}
export declare enum TXCase {
    LTC = "ltcTx",
    BCH = "bchTx",
    DASH = "dashTx"
}
export declare class Keystone {
    protected generateSignData({ chain, requestId, signData, xfp }: KeystoneSignRequestProps): Uint8Array;
    generateSignRequest(props: KeystoneSignRequestProps): UR;
    parseSignResult(ur: UR): KeystoneSignResultType;
}
