import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { TronTx } from "../chains/keystone/protos/tron_transaction_pb";
import { BchTx } from "../chains/keystone/protos/bch_transaction_pb";
import { DashTx } from "../chains/keystone/protos/dash_transaction_pb";
import { LtcTx } from "../chains/keystone/protos/ltc_transaction_pb";
/**
 * @generated from message protoc.SignTransaction
 */
export declare class SignTransaction extends Message<SignTransaction> {
    /**
     * @generated from field: string coinCode = 1;
     */
    coinCode: string;
    /**
     * @generated from field: string signId = 2;
     */
    signId: string;
    /**
     * @generated from field: string hdPath = 3;
     */
    hdPath: string;
    /**
     * @generated from field: int64 timestamp = 4;
     */
    timestamp: bigint;
    /**
     * @generated from field: int32 decimal = 5;
     */
    decimal: number;
    /**
     * @generated from oneof protoc.SignTransaction.Transaction
     */
    Transaction: {
        /**
         * BtcTx btcTx = 6;
         * EthTx ethTx = 7;
         *
         * @generated from field: protoc.TronTx tronTx = 8;
         */
        value: TronTx;
        case: "tronTx";
    } | {
        /**
         * EtcTx etcTx = 9;
         *
         * @generated from field: protoc.BchTx bchTx = 10;
         */
        value: BchTx;
        case: "bchTx";
    } | {
        /**
         * @generated from field: protoc.DashTx dashTx = 11;
         */
        value: DashTx;
        case: "dashTx";
    } | {
        /**
         * DcrTx dcrTx = 13;
         * XzcTx xzcTx = 14;
         * XrpTx xrpTx = 15;
         * IostTx iostTx = 16;
         * OmniTx omniTx = 17;
         * EosTx eosTx = 18;
         * DotTx dotTx = 19;
         * KsmTx ksmTx = 20;
         * CfxTx cfxTx = 21;
         *
         * @generated from field: protoc.LtcTx ltcTx = 12;
         */
        value: LtcTx;
        case: "ltcTx";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<SignTransaction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "protoc.SignTransaction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignTransaction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignTransaction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignTransaction;
    static equals(a: SignTransaction | PlainMessage<SignTransaction> | undefined, b: SignTransaction | PlainMessage<SignTransaction> | undefined): boolean;
}
