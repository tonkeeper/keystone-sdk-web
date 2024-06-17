"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.raw2tx = void 0;
const bs58check_1 = __importDefault(require("bs58check"));
const contract_pb_1 = require("../../gen/chains/tron/protos/contract_pb");
const tron_pb_1 = require("../../gen/chains/tron/protos/tron_pb");
const utils_1 = require("../../utils");
const tron_transaction_pb_1 = require("../../gen/chains/keystone/protos/tron_transaction_pb");
function formatAddress(address) {
    return bs58check_1.default.encode(address);
}
function raw2tx(signData, tokenInfo) {
    let rawData;
    try {
        rawData = tron_pb_1.Transaction_raw.fromBinary(signData);
    }
    catch (e) {
        throw new Error('Sign data is invalid');
    }
    const override = (tokenInfo !== undefined)
        ? {
            decimals: tokenInfo.decimals,
            tokenFullName: tokenInfo.name,
            tokenShortName: tokenInfo.symbol
        }
        : null;
    const refBlockHash = Buffer.from([...new Uint8Array(8).fill(0), ...rawData.refBlockHash, ...new Uint8Array(16).fill(0)]);
    const latestBlock = new tron_transaction_pb_1.LatestBlock({
        hash: (0, utils_1.toHex)(refBlockHash),
        number: Number(`0x${(0, utils_1.toHex)(rawData.refBlockBytes.slice(0, 2))}`),
        timestamp: BigInt(Number(rawData.expiration) - 600 * 5 * 1000)
    });
    const contractData = rawData.contract[0];
    if (contractData.parameter === undefined) {
        throw new Error('contract is invalid');
    }
    let contract;
    switch (contractData.type) {
        case tron_pb_1.Transaction_Contract_ContractType.TransferContract:
            try {
                contract = contract_pb_1.TransferContract.fromBinary(contractData.parameter.value);
            }
            catch (e) {
                throw new Error('sign data is invalid');
            }
            return new tron_transaction_pb_1.TronTx({
                fee: Number(rawData.feeLimit),
                from: formatAddress(contract.ownerAddress),
                latestBlock,
                to: formatAddress(contract.toAddress),
                token: 'TRX',
                value: contract.amount.toString()
            });
        case tron_pb_1.Transaction_Contract_ContractType.TransferAssetContract:
            try {
                contract = contract_pb_1.TransferAssetContract.fromBinary(contractData.parameter.value);
            }
            catch (e) {
                throw new Error('sign data is invalid');
            }
            if (override == null) {
                throw new Error('token info is invalid');
            }
            return new tron_transaction_pb_1.TronTx({
                fee: Number(rawData.feeLimit),
                from: formatAddress(contract.ownerAddress),
                latestBlock,
                override,
                to: formatAddress(contract.toAddress),
                token: Buffer.from(contract.assetName).toString(),
                value: contract.amount.toString()
            });
        case tron_pb_1.Transaction_Contract_ContractType.TriggerSmartContract:
            try {
                contract = contract_pb_1.TriggerSmartContract.fromBinary(contractData.parameter.value);
            }
            catch (e) {
                throw new Error('sign data is invalid');
            }
            if (override == null) {
                throw new Error('token info is invalid');
            }
            return new tron_transaction_pb_1.TronTx({
                contractAddress: formatAddress(contract.contractAddress),
                fee: Number(rawData.feeLimit),
                from: formatAddress(contract.ownerAddress),
                latestBlock,
                override,
                to: formatAddress(Buffer.from([65, ...contract.data.slice(16, 36)])),
                value: BigInt(`0x${Buffer.from(contract.data.slice(36, 68)).toString('hex')}`).toString()
            });
        default:
            throw new Error('contract is not supported');
    }
}
exports.raw2tx = raw2tx;
