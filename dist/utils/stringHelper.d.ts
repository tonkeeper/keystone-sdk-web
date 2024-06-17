/// <reference types="node" />
import * as uuid from 'uuid';
import { type PathComponent } from '../types/account';
export * from './coin';
export { uuid };
export declare function toHex(buf: Buffer | Uint8Array | undefined): string;
export declare function toBuffer(hex: string | undefined): Buffer;
export declare function uuidParse(id: string): Buffer;
export declare function uuidStringify(id: Buffer): string;
export declare function parsePath(path: string): PathComponent[];
