import { type LTCSignRequestProps } from '../types/props';
import { type UR } from '../types/ur';
import { Keystone } from './keystone';
export declare class KeystoneLitecoinSDK extends Keystone {
    generateSignRequest(props: LTCSignRequestProps): UR;
}
