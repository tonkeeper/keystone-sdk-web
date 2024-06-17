import { type BCHSignRequestProps } from '../types/props';
import { type UR } from '../types/ur';
import { Keystone } from './keystone';
export declare class KeystoneBitcoinCashSDK extends Keystone {
    generateSignRequest(props: BCHSignRequestProps): UR;
}
