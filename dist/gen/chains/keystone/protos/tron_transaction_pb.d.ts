import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message protoc.LatestBlock
 */
export declare class LatestBlock extends Message<LatestBlock> {
    /**
     * @generated from field: string hash = 1;
     */
    hash: string;
    /**
     * @generated from field: int32 number = 2;
     */
    number: number;
    /**
     * @generated from field: int64 timestamp = 3;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<LatestBlock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.LatestBlock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LatestBlock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LatestBlock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LatestBlock;
    static equals(a: LatestBlock | PlainMessage<LatestBlock> | undefined, b: LatestBlock | PlainMessage<LatestBlock> | undefined): boolean;
}
/**
 * @generated from message protoc.Override
 */
export declare class Override extends Message<Override> {
    /**
     * @generated from field: string tokenShortName = 1;
     */
    tokenShortName: string;
    /**
     * @generated from field: string tokenFullName = 2;
     */
    tokenFullName: string;
    /**
     * @generated from field: int32 decimals = 3;
     */
    decimals: number;
    constructor(data?: PartialMessage<Override>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.Override";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Override;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Override;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Override;
    static equals(a: Override | PlainMessage<Override> | undefined, b: Override | PlainMessage<Override> | undefined): boolean;
}
/**
 * @generated from message protoc.TronTx
 */
export declare class TronTx extends Message<TronTx> {
    /**
     * required for TRC10 token, for example '1001090' for TRONONE
     *
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * required for TRC20 token
     *
     * @generated from field: string contractAddress = 2;
     */
    contractAddress: string;
    /**
     * @generated from field: string from = 3;
     */
    from: string;
    /**
     * @generated from field: string to = 4;
     */
    to: string;
    /**
     * @generated from field: string memo = 5;
     */
    memo: string;
    /**
     * @generated from field: string value = 6;
     */
    value: string;
    /**
     * @generated from field: protoc.LatestBlock latestBlock = 7;
     */
    latestBlock?: LatestBlock;
    /**
     * for display token info
     *
     * @generated from field: protoc.Override override = 8;
     */
    override?: Override;
    /**
     * @generated from field: int32 fee = 9;
     */
    fee: number;
    constructor(data?: PartialMessage<TronTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.TronTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TronTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TronTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TronTx;
    static equals(a: TronTx | PlainMessage<TronTx> | undefined, b: TronTx | PlainMessage<TronTx> | undefined): boolean;
}
