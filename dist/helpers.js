"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPastYear = exports.validateWalletAddress = exports.modifyMessage = exports.humanizeFieldName = exports.isBlank = exports.testRegex = void 0;
var multicoin_address_validator_1 = __importDefault(require("multicoin-address-validator"));
function testRegex(value, regex) {
    return (value === null || value === void 0 ? void 0 : value.toString().match(regex)) !== null;
}
exports.testRegex = testRegex;
function isBlank(value) {
    return (typeof value === "undefined" ||
        value === null ||
        testRegex(value, /^[\s]*$/));
}
exports.isBlank = isBlank;
function humanizeFieldName(field) {
    return field
        .replace(/([A-Z])/g, " $1")
        .replace(/_/g, " ")
        .toLowerCase();
}
exports.humanizeFieldName = humanizeFieldName;
function modifyMessage(field, message) {
    return message.replace(":attribute", humanizeFieldName(field));
}
exports.modifyMessage = modifyMessage;
function validateWalletAddress(value) {
    var _a = value === null || value === void 0 ? void 0 : value.split(":"), currency = _a[0], address = _a[1];
    if (currency && address)
        return multicoin_address_validator_1.default.validate(address, currency);
    return false;
}
exports.validateWalletAddress = validateWalletAddress;
function isPastYear(year) {
    var currentYear = new Date().getFullYear().toString().substr(-2);
    if (year < currentYear)
        return true;
    return false;
}
exports.isPastYear = isPastYear;
//# sourceMappingURL=helpers.js.map