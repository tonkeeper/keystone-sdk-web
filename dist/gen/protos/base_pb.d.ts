import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Payload } from "./payload_pb";
/**
 * @generated from message protoc.Base
 */
export declare class Base extends Message<Base> {
    /**
     * @generated from field: int32 version = 1;
     */
    version: number;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: protoc.Payload data = 3;
     */
    data?: Payload;
    /**
     * @generated from oneof protoc.Base.Content
     */
    Content: {
        /**
         * @generated from field: int32 hotVersion = 4;
         */
        value: number;
        case: "hotVersion";
    } | {
        /**
         * @generated from field: int32 coldVersion = 5;
         */
        value: number;
        case: "coldVersion";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: string deviceType = 6;
     */
    deviceType: string;
    constructor(data?: PartialMessage<Base>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.Base";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Base;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Base;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Base;
    static equals(a: Base | PlainMessage<Base> | undefined, b: Base | PlainMessage<Base> | undefined): boolean;
}
