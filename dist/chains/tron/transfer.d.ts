/// <reference types="node" />
import { type TokenInfo } from '../../types';
import { TronTx } from '../../gen/chains/keystone/protos/tron_transaction_pb';
export declare function raw2tx(signData: Buffer, tokenInfo?: TokenInfo): TronTx;
