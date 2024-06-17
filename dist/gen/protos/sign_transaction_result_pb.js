"use strict";
// @generated by protoc-gen-es v1.2.0 with parameter "target=ts,import_extension="
// @generated from file protos/sign_transaction_result.proto (package protoc, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignTransactionResult = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from message protoc.SignTransactionResult
 */
class SignTransactionResult extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string signId = 1;
         */
        this.signId = "";
        /**
         * @generated from field: string txId = 2;
         */
        this.txId = "";
        /**
         * @generated from field: string rawTx = 3;
         */
        this.rawTx = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SignTransactionResult().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SignTransactionResult().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SignTransactionResult().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(SignTransactionResult, a, b);
    }
}
SignTransactionResult.runtime = protobuf_1.proto3;
SignTransactionResult.typeName = "protoc.SignTransactionResult";
SignTransactionResult.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "signId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "txId", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "rawTx", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
exports.SignTransactionResult = SignTransactionResult;
