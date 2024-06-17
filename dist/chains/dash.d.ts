import { type DashSignRequestProps } from '../types/props';
import { type UR } from '../types/ur';
import { Keystone } from './keystone';
export declare class KeystoneDashSDK extends Keystone {
    generateSignRequest(props: DashSignRequestProps): UR;
}
