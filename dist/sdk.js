"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeystoneSDK = void 0;
const chains_1 = require("./chains");
const wallet_1 = require("./wallet");
const xrp_1 = require("./chains/xrp");
class KeystoneSDK {
    constructor(config) {
        this.parseMultiAccounts = wallet_1.parseMultiAccounts;
        this.parseTonAccount = wallet_1.parseTonAccount;
        this.parseHDKey = wallet_1.parseHDKey;
        this.parseAccount = wallet_1.parseAccount;
        this.generateKeyDerivationCall = wallet_1.generateKeyDerivationCall;
        this.config = config;
    }
    get btc() {
        if (this._btc === undefined) {
            this._btc = new chains_1.KeystoneBitcoinSDK();
        }
        return this._btc;
    }
    get eth() {
        if (this._eth === undefined) {
            this._eth = new chains_1.KeystoneEthereumSDK(this.config);
        }
        return this._eth;
    }
    get sol() {
        if (this._sol === undefined) {
            this._sol = new chains_1.KeystoneSolanaSDK();
        }
        return this._sol;
    }
    get stellar() {
        if (this._stellar === undefined) {
            this._stellar = new chains_1.KeystoneStellarSDK();
        }
        return this._stellar;
    }
    get cosmos() {
        if (this._cosmos === undefined) {
            this._cosmos = new chains_1.KeystoneCosmosSDK(this.config);
        }
        return this._cosmos;
    }
    get evm() {
        if (this._evm === undefined) {
            this._evm = new chains_1.KeystoneEvmSDK(this.config);
        }
        return this._evm;
    }
    get tron() {
        if (this._tron === undefined) {
            this._tron = new chains_1.KeystoneTronSDK();
        }
        return this._tron;
    }
    get ltc() {
        if (this._ltc === undefined) {
            this._ltc = new chains_1.KeystoneLitecoinSDK();
        }
        return this._ltc;
    }
    get bch() {
        if (this._bch === undefined) {
            this._bch = new chains_1.KeystoneBitcoinCashSDK();
        }
        return this._bch;
    }
    get dash() {
        if (this._dash === undefined) {
            this._dash = new chains_1.KeystoneDashSDK();
        }
        return this._dash;
    }
    get aptos() {
        if (this._aptos === undefined) {
            this._aptos = new chains_1.KeystoneAptosSDK();
        }
        return this._aptos;
    }
    get near() {
        if (this._near === undefined) {
            this._near = new chains_1.KeystoneNearSDK();
        }
        return this._near;
    }
    get arweave() {
        if (this._arweave === undefined) {
            this._arweave = new chains_1.KeystoneArweaveSDK();
        }
        return this._arweave;
    }
    get sui() {
        if (this._sui === undefined) {
            this._sui = new chains_1.KeystoneSuiSDK();
        }
        return this._sui;
    }
    get cardano() {
        if (this._cardano === undefined) {
            this._cardano = new chains_1.KeystoneCardanoSDK();
        }
        return this._cardano;
    }
    get xrp() {
        if (this._xrp === undefined) {
            this._xrp = new xrp_1.KeystoneXrpSDK();
        }
        return this._xrp;
    }
    get ton() {
        if (this._ton === undefined) {
            this._ton = new chains_1.KeystoneTonSDK(this.config);
        }
        return this._ton;
    }
}
/**
 * @deprecated since version 0.2.1.
 * @description Replaced by a instance function with same name. It will be removed since version 0.3.0.
 * @example
 * const sdk = new KeystoneSDK();
 * const multiAccounts = sdk.parseMultiAccounts(ur);
 */
KeystoneSDK.parseMultiAccounts = wallet_1.parseMultiAccounts;
/**
 * @deprecated since version 0.2.1.
 * @description Replaced by a instance function with same name. It will be removed since version 0.3.0.
 * @example
 * const sdk = new KeystoneSDK();
 * const account = sdk.parseHDKey(ur);
 */
KeystoneSDK.parseHDKey = wallet_1.parseHDKey;
/**
 * @deprecated since version 0.2.1.
 * @description Replaced by a instance function with same name. It will be removed since version 0.3.0.
 * @example
 * const sdk = new KeystoneSDK();
 * const ur = sdk.generateKeyDerivationCall(args);
 */
KeystoneSDK.generateKeyDerivationCall = wallet_1.generateKeyDerivationCall;
exports.KeystoneSDK = KeystoneSDK;
