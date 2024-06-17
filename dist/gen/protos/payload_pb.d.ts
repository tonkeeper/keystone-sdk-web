import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { SignTransaction } from "./transaction_pb";
import { SignTransactionResult } from "./sign_transaction_result_pb";
/**
 * @generated from message protoc.Payload
 */
export declare class Payload extends Message<Payload> {
    /**
     * @generated from field: protoc.Payload.Type type = 1;
     */
    type: Payload_Type;
    /**
     * @generated from field: string xfp = 2;
     */
    xfp: string;
    /**
     * @generated from oneof protoc.Payload.Content
     */
    Content: {
        /**
         * Sync sync = 3;
         *
         * @generated from field: protoc.SignTransaction signTx = 4;
         */
        value: SignTransaction;
        case: "signTx";
    } | {
        /**
         * SignMessage signMsg = 5;
         * VerifyAddress verifyAddr = 6;
         *
         * @generated from field: protoc.SignTransactionResult signTxResult = 7;
         */
        value: SignTransactionResult;
        case: "signTxResult";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<Payload>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.Payload";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Payload;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Payload;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Payload;
    static equals(a: Payload | PlainMessage<Payload> | undefined, b: Payload | PlainMessage<Payload> | undefined): boolean;
}
/**
 * @generated from enum protoc.Payload.Type
 */
export declare enum Payload_Type {
    /**
     * @generated from enum value: TYPE_RESERVE = 0;
     */
    RESERVE = 0,
    /**
     * @generated from enum value: TYPE_SYNC = 1;
     */
    SYNC = 1,
    /**
     * @generated from enum value: TYPE_SIGN_TX = 2;
     */
    SIGN_TX = 2,
    /**
     * @generated from enum value: TYPE_SIGN_MSG = 3;
     */
    SIGN_MSG = 3,
    /**
     * @generated from enum value: TYPE_SIGN_MULTI_SIG = 4;
     */
    SIGN_MULTI_SIG = 4,
    /**
     * @generated from enum value: TYPE_SYNC_MULTI_SIG_MSG = 5;
     */
    SYNC_MULTI_SIG_MSG = 5,
    /**
     * @generated from enum value: TYPE_SIGN_ETH_MULTI_SIG_MSG = 6;
     */
    SIGN_ETH_MULTI_SIG_MSG = 6,
    /**
     * @generated from enum value: TYPE_VERIFY_ADDRESS = 7;
     */
    VERIFY_ADDRESS = 7,
    /**
     * @generated from enum value: TYPE_STAKING = 8;
     */
    STAKING = 8,
    /**
     * @generated from enum value: TYPE_SIGN_TX_RESULT = 9;
     */
    SIGN_TX_RESULT = 9
}
