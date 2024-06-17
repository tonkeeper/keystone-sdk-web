import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Output } from "../../../protos/btc_transaction_pb";
/**
 * @generated from message protoc.BchTx
 */
export declare class BchTx extends Message<BchTx> {
    /**
     * fee = outputs.size > 1 ? fee = sum(input.value) - sum(output.value) : fee
     *
     * @generated from field: int64 fee = 1;
     */
    fee: bigint;
    /**
     * @generated from field: int32 dustThreshold = 2;
     */
    dustThreshold: number;
    /**
     * @generated from field: string memo = 3;
     */
    memo: string;
    /**
     * @generated from field: repeated protoc.BchTx.Input inputs = 4;
     */
    inputs: BchTx_Input[];
    /**
     * @generated from field: repeated protoc.Output outputs = 5;
     */
    outputs: Output[];
    constructor(data?: PartialMessage<BchTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.BchTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BchTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BchTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BchTx;
    static equals(a: BchTx | PlainMessage<BchTx> | undefined, b: BchTx | PlainMessage<BchTx> | undefined): boolean;
}
/**
 * @generated from message protoc.BchTx.Input
 */
export declare class BchTx_Input extends Message<BchTx_Input> {
    /**
     * @generated from field: string hash = 1;
     */
    hash: string;
    /**
     * @generated from field: int32 index = 2;
     */
    index: number;
    /**
     * @generated from field: int64 value = 3;
     */
    value: bigint;
    /**
     * @generated from field: string pubkey = 4;
     */
    pubkey: string;
    /**
     * @generated from field: string ownerKeyPath = 5;
     */
    ownerKeyPath: string;
    constructor(data?: PartialMessage<BchTx_Input>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.BchTx.Input";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BchTx_Input;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BchTx_Input;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BchTx_Input;
    static equals(a: BchTx_Input | PlainMessage<BchTx_Input> | undefined, b: BchTx_Input | PlainMessage<BchTx_Input> | undefined): boolean;
}
