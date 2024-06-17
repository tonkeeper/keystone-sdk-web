import { KeystoneAptosSDK, KeystoneArweaveSDK, KeystoneBitcoinCashSDK, KeystoneBitcoinSDK, KeystoneCardanoSDK, KeystoneCosmosSDK, KeystoneDashSDK, KeystoneEthereumSDK, KeystoneLitecoinSDK, KeystoneSolanaSDK, KeystoneTronSDK, KeystoneNearSDK, KeystoneSuiSDK, KeystoneEvmSDK, KeystoneTonSDK, KeystoneStellarSDK } from './chains';
import { KeystoneXrpSDK } from './chains/xrp';
import { type KeystoneSDKConfig } from './types/config';
export { KeystoneSDKConfig };
export declare class KeystoneSDK {
    config?: KeystoneSDKConfig;
    constructor(config?: KeystoneSDKConfig);
    private _btc;
    get btc(): KeystoneBitcoinSDK;
    private _eth;
    get eth(): KeystoneEthereumSDK;
    private _sol;
    get sol(): KeystoneSolanaSDK;
    private _stellar;
    get stellar(): KeystoneStellarSDK;
    private _cosmos;
    get cosmos(): KeystoneCosmosSDK;
    private _evm;
    get evm(): KeystoneEvmSDK;
    private _tron;
    get tron(): KeystoneTronSDK;
    private _ltc;
    get ltc(): KeystoneLitecoinSDK;
    private _bch;
    get bch(): KeystoneBitcoinCashSDK;
    private _dash;
    get dash(): KeystoneDashSDK;
    private _aptos;
    get aptos(): KeystoneAptosSDK;
    private _near;
    get near(): KeystoneNearSDK;
    private _arweave;
    get arweave(): KeystoneArweaveSDK;
    private _sui;
    get sui(): KeystoneSuiSDK;
    private _cardano;
    get cardano(): KeystoneCardanoSDK;
    private _xrp;
    get xrp(): KeystoneXrpSDK;
    private _ton;
    get ton(): KeystoneTonSDK;
    parseMultiAccounts: (ur: import("@ngraveio/bc-ur").UR) => import("./types").MultiAccounts;
    parseTonAccount: (ur: import("@ngraveio/bc-ur").UR) => import("./types").TonAccount;
    parseHDKey: (ur: import("@ngraveio/bc-ur").UR) => import("./types").Account;
    parseAccount: (ur: import("@ngraveio/bc-ur").UR) => import("./types").AccountDescriptor;
    generateKeyDerivationCall: ({ schemas, origin }: import("./wallet").KeyDerivationCallArgs) => import("@ngraveio/bc-ur").UR;
    /**
     * @deprecated since version 0.2.1.
     * @description Replaced by a instance function with same name. It will be removed since version 0.3.0.
     * @example
     * const sdk = new KeystoneSDK();
     * const multiAccounts = sdk.parseMultiAccounts(ur);
     */
    static parseMultiAccounts: (ur: import("@ngraveio/bc-ur").UR) => import("./types").MultiAccounts;
    /**
     * @deprecated since version 0.2.1.
     * @description Replaced by a instance function with same name. It will be removed since version 0.3.0.
     * @example
     * const sdk = new KeystoneSDK();
     * const account = sdk.parseHDKey(ur);
     */
    static parseHDKey: (ur: import("@ngraveio/bc-ur").UR) => import("./types").Account;
    /**
     * @deprecated since version 0.2.1.
     * @description Replaced by a instance function with same name. It will be removed since version 0.3.0.
     * @example
     * const sdk = new KeystoneSDK();
     * const ur = sdk.generateKeyDerivationCall(args);
     */
    static generateKeyDerivationCall: ({ schemas, origin }: import("./wallet").KeyDerivationCallArgs) => import("@ngraveio/bc-ur").UR;
}
