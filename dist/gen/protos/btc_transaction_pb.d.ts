import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message protoc.BtcTx
 */
export declare class BtcTx extends Message<BtcTx> {
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
     * for normal btc transaction
     *
     * @generated from field: repeated protoc.Output outputs = 5;
     */
    outputs: Output[];
    /**
     * for omni
     *
     * @generated from field: protoc.Omni omni = 6;
     */
    omni?: Omni;
    constructor(data?: PartialMessage<BtcTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.BtcTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BtcTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BtcTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BtcTx;
    static equals(a: BtcTx | PlainMessage<BtcTx> | undefined, b: BtcTx | PlainMessage<BtcTx> | undefined): boolean;
}
/**
 * @generated from message protoc.Omni
 */
export declare class Omni extends Message<Omni> {
    /**
     * @generated from field: string to = 5;
     */
    to: string;
    /**
     * @generated from field: string changeAddress = 6;
     */
    changeAddress: string;
    /**
     * sat unit
     *
     * @generated from field: int64 omniAmount = 7;
     */
    omniAmount: bigint;
    /**
     * optional default 31 for usdt
     *
     * @generated from field: int32 propertyId = 8;
     */
    propertyId: number;
    constructor(data?: PartialMessage<Omni>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.Omni";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Omni;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Omni;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Omni;
    static equals(a: Omni | PlainMessage<Omni> | undefined, b: Omni | PlainMessage<Omni> | undefined): boolean;
}
/**
 * @generated from message protoc.Input
 */
export declare class Input extends Message<Input> {
    /**
     * @generated from field: string hash = 1;
     */
    hash: string;
    /**
     * @generated from field: int32 index = 2;
     */
    index: number;
    /**
     * @generated from field: protoc.utxo utxo = 3;
     */
    utxo?: utxo;
    /**
     * @generated from field: string ownerKeyPath = 4;
     */
    ownerKeyPath: string;
    constructor(data?: PartialMessage<Input>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.Input";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Input;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Input;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Input;
    static equals(a: Input | PlainMessage<Input> | undefined, b: Input | PlainMessage<Input> | undefined): boolean;
}
/**
 * @generated from message protoc.utxo
 */
export declare class utxo extends Message<utxo> {
    /**
     * @generated from field: string publicKey = 1;
     */
    publicKey: string;
    /**
     * @generated from field: string script = 2;
     */
    script: string;
    /**
     * @generated from field: int64 value = 3;
     */
    value: bigint;
    constructor(data?: PartialMessage<utxo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.utxo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): utxo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): utxo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): utxo;
    static equals(a: utxo | PlainMessage<utxo> | undefined, b: utxo | PlainMessage<utxo> | undefined): boolean;
}
/**
 * @generated from message protoc.Output
 */
export declare class Output extends Message<Output> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: int64 value = 2;
     */
    value: bigint;
    /**
     * @generated from field: bool isChange = 3;
     */
    isChange: boolean;
    /**
     * @generated from field: string changeAddressPath = 4;
     */
    changeAddressPath: string;
    constructor(data?: PartialMessage<Output>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.Output";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Output;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Output;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Output;
    static equals(a: Output | PlainMessage<Output> | undefined, b: Output | PlainMessage<Output> | undefined): boolean;
}
