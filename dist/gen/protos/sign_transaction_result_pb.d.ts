import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message protoc.SignTransactionResult
 */
export declare class SignTransactionResult extends Message<SignTransactionResult> {
    /**
     * @generated from field: string signId = 1;
     */
    signId: string;
    /**
     * @generated from field: string txId = 2;
     */
    txId: string;
    /**
     * @generated from field: string rawTx = 3;
     */
    rawTx: string;
    constructor(data?: PartialMessage<SignTransactionResult>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.SignTransactionResult";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignTransactionResult;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignTransactionResult;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignTransactionResult;
    static equals(a: SignTransactionResult | PlainMessage<SignTransactionResult> | undefined, b: SignTransactionResult | PlainMessage<SignTransactionResult> | undefined): boolean;
}
