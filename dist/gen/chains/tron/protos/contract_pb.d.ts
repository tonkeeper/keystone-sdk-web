import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message protocol.TransferContract
 */
export declare class TransferContract extends Message<TransferContract> {
    /**
     * @generated from field: bytes owner_address = 1;
     */
    ownerAddress: Uint8Array;
    /**
     * @generated from field: bytes to_address = 2;
     */
    toAddress: Uint8Array;
    /**
     * @generated from field: int64 amount = 3;
     */
    amount: bigint;
    constructor(data?: PartialMessage<TransferContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protocol.TransferContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransferContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransferContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransferContract;
    static equals(a: TransferContract | PlainMessage<TransferContract> | undefined, b: TransferContract | PlainMessage<TransferContract> | undefined): boolean;
}
/**
 * @generated from message protocol.TransferAssetContract
 */
export declare class TransferAssetContract extends Message<TransferAssetContract> {
    /**
     * this field is token name before the proposal ALLOW_SAME_TOKEN_NAME is active, otherwise it is token id and token is should be in string format.
     *
     * @generated from field: bytes asset_name = 1;
     */
    assetName: Uint8Array;
    /**
     * @generated from field: bytes owner_address = 2;
     */
    ownerAddress: Uint8Array;
    /**
     * @generated from field: bytes to_address = 3;
     */
    toAddress: Uint8Array;
    /**
     * @generated from field: int64 amount = 4;
     */
    amount: bigint;
    constructor(data?: PartialMessage<TransferAssetContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protocol.TransferAssetContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransferAssetContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransferAssetContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransferAssetContract;
    static equals(a: TransferAssetContract | PlainMessage<TransferAssetContract> | undefined, b: TransferAssetContract | PlainMessage<TransferAssetContract> | undefined): boolean;
}
/**
 * @generated from message protocol.TriggerSmartContract
 */
export declare class TriggerSmartContract extends Message<TriggerSmartContract> {
    /**
     * @generated from field: bytes owner_address = 1;
     */
    ownerAddress: Uint8Array;
    /**
     * @generated from field: bytes contract_address = 2;
     */
    contractAddress: Uint8Array;
    /**
     * @generated from field: int64 call_value = 3;
     */
    callValue: bigint;
    /**
     * @generated from field: bytes data = 4;
     */
    data: Uint8Array;
    /**
     * @generated from field: int64 call_token_value = 5;
     */
    callTokenValue: bigint;
    /**
     * @generated from field: int64 token_id = 6;
     */
    tokenId: bigint;
    constructor(data?: PartialMessage<TriggerSmartContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protocol.TriggerSmartContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TriggerSmartContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TriggerSmartContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TriggerSmartContract;
    static equals(a: TriggerSmartContract | PlainMessage<TriggerSmartContract> | undefined, b: TriggerSmartContract | PlainMessage<TriggerSmartContract> | undefined): boolean;
}
