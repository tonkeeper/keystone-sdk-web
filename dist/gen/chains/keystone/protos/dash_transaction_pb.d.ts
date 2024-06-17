import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Output } from "../../../protos/btc_transaction_pb";
/**
 * @generated from message protoc.DashTx
 */
export declare class DashTx extends Message<DashTx> {
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
     * @generated from field: repeated protoc.DashTx.Input inputs = 4;
     */
    inputs: DashTx_Input[];
    /**
     * @generated from field: repeated protoc.Output outputs = 5;
     */
    outputs: Output[];
    constructor(data?: PartialMessage<DashTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.DashTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DashTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DashTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DashTx;
    static equals(a: DashTx | PlainMessage<DashTx> | undefined, b: DashTx | PlainMessage<DashTx> | undefined): boolean;
}
/**
 * @generated from message protoc.DashTx.Input
 */
export declare class DashTx_Input extends Message<DashTx_Input> {
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
    constructor(data?: PartialMessage<DashTx_Input>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.DashTx.Input";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DashTx_Input;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DashTx_Input;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DashTx_Input;
    static equals(a: DashTx_Input | PlainMessage<DashTx_Input> | undefined, b: DashTx_Input | PlainMessage<DashTx_Input> | undefined): boolean;
}
