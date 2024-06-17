import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
/**
 * AccountId, (name, address) use name, (null, address) use address, (name, null) use name,
 *
 * @generated from message protocol.AccountId
 */
export declare class AccountId extends Message<AccountId> {
    /**
     * @generated from field: bytes name = 1;
     */
    name: Uint8Array;
    /**
     * @generated from field: bytes address = 2;
     */
    address: Uint8Array;
    constructor(data?: PartialMessage<AccountId>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protocol.AccountId";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountId;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountId;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountId;
    static equals(a: AccountId | PlainMessage<AccountId> | undefined, b: AccountId | PlainMessage<AccountId> | undefined): boolean;
}
/**
 * @generated from message protocol.authority
 */
export declare class authority extends Message<authority> {
    /**
     * @generated from field: protocol.AccountId account = 1;
     */
    account?: AccountId;
    /**
     * @generated from field: bytes permission_name = 2;
     */
    permissionName: Uint8Array;
    constructor(data?: PartialMessage<authority>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protocol.authority";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): authority;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): authority;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): authority;
    static equals(a: authority | PlainMessage<authority> | undefined, b: authority | PlainMessage<authority> | undefined): boolean;
}
/**
 * @generated from message protocol.Transaction
 */
export declare class Transaction extends Message<Transaction> {
    /**
     * @generated from field: protocol.Transaction.raw raw_data = 1;
     */
    rawData?: Transaction_raw;
    /**
     * only support size = 1,  repeated list here for muti-sig extension
     *
     * @generated from field: repeated bytes signature = 2;
     */
    signature: Uint8Array[];
    constructor(data?: PartialMessage<Transaction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protocol.Transaction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transaction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transaction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transaction;
    static equals(a: Transaction | PlainMessage<Transaction> | undefined, b: Transaction | PlainMessage<Transaction> | undefined): boolean;
}
/**
 * @generated from message protocol.Transaction.Contract
 */
export declare class Transaction_Contract extends Message<Transaction_Contract> {
    /**
     * @generated from field: protocol.Transaction.Contract.ContractType type = 1;
     */
    type: Transaction_Contract_ContractType;
    /**
     * @generated from field: google.protobuf.Any parameter = 2;
     */
    parameter?: Any;
    /**
     * @generated from field: bytes provider = 3;
     */
    provider: Uint8Array;
    /**
     * @generated from field: bytes ContractName = 4;
     */
    ContractName: Uint8Array;
    /**
     * @generated from field: int32 Permission_id = 5;
     */
    PermissionId: number;
    constructor(data?: PartialMessage<Transaction_Contract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protocol.Transaction.Contract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transaction_Contract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transaction_Contract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transaction_Contract;
    static equals(a: Transaction_Contract | PlainMessage<Transaction_Contract> | undefined, b: Transaction_Contract | PlainMessage<Transaction_Contract> | undefined): boolean;
}
/**
 * @generated from enum protocol.Transaction.Contract.ContractType
 */
export declare enum Transaction_Contract_ContractType {
    /**
     * @generated from enum value: AccountCreateContract = 0;
     */
    AccountCreateContract = 0,
    /**
     * @generated from enum value: TransferContract = 1;
     */
    TransferContract = 1,
    /**
     * @generated from enum value: TransferAssetContract = 2;
     */
    TransferAssetContract = 2,
    /**
     * @generated from enum value: TriggerSmartContract = 31;
     */
    TriggerSmartContract = 31
}
/**
 * @generated from message protocol.Transaction.raw
 */
export declare class Transaction_raw extends Message<Transaction_raw> {
    /**
     * @generated from field: bytes ref_block_bytes = 1;
     */
    refBlockBytes: Uint8Array;
    /**
     * @generated from field: int64 ref_block_num = 3;
     */
    refBlockNum: bigint;
    /**
     * @generated from field: bytes ref_block_hash = 4;
     */
    refBlockHash: Uint8Array;
    /**
     * @generated from field: int64 expiration = 8;
     */
    expiration: bigint;
    /**
     * @generated from field: repeated protocol.authority auths = 9;
     */
    auths: authority[];
    /**
     * data not used
     *
     * @generated from field: bytes data = 10;
     */
    data: Uint8Array;
    /**
     * only support size = 1,  repeated list here for extension
     *
     * @generated from field: repeated protocol.Transaction.Contract contract = 11;
     */
    contract: Transaction_Contract[];
    /**
     * scripts not used
     *
     * @generated from field: bytes scripts = 12;
     */
    scripts: Uint8Array;
    /**
     * @generated from field: int64 timestamp = 14;
     */
    timestamp: bigint;
    /**
     * @generated from field: int64 fee_limit = 18;
     */
    feeLimit: bigint;
    constructor(data?: PartialMessage<Transaction_raw>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protocol.Transaction.raw";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transaction_raw;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transaction_raw;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transaction_raw;
    static equals(a: Transaction_raw | PlainMessage<Transaction_raw> | undefined, b: Transaction_raw | PlainMessage<Transaction_raw> | undefined): boolean;
}
