import WAValidator from "multicoin-address-validator";
export function testRegex(value, regex) {
    return (value === null || value === void 0 ? void 0 : value.toString().match(regex)) !== null;
}
export function isBlank(value) {
    return (typeof value === "undefined" ||
        value === null ||
        testRegex(value, /^[\s]*$/));
}
export function humanizeFieldName(field) {
    return field
        .replace(/([A-Z])/g, " $1")
        .replace(/_/g, " ")
        .toLowerCase();
}
export function modifyMessage(field, message) {
    return message.replace(":attribute", humanizeFieldName(field));
}
export function validateWalletAddress(value) {
    var currency = value === null || value === void 0 ? void 0 : value.split(":")[0];
    var address = value === null || value === void 0 ? void 0 : value.split(":")[1];
    return WAValidator.validate(address, currency);
}
//# sourceMappingURL=helpers.js.map