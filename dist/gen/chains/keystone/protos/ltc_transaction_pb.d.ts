import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Input, Output } from "../../../protos/btc_transaction_pb";
/**
 * @generated from message protoc.LtcTx
 */
export declare class LtcTx extends Message<LtcTx> {
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
     * @generated from field: repeated protoc.Input inputs = 4;
     */
    inputs: Input[];
    /**
     * @generated from field: repeated protoc.Output outputs = 5;
     */
    outputs: Output[];
    constructor(data?: PartialMessage<LtcTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.LtcTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LtcTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LtcTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LtcTx;
    static equals(a: LtcTx | PlainMessage<LtcTx> | undefined, b: LtcTx | PlainMessage<LtcTx> | undefined): boolean;
}
