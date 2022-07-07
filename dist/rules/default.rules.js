"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRules = void 0;
var helpers = __importStar(require("../helpers"));
exports.defaultRules = {
    required: {
        message: "The :attribute is required.",
        validate: function (val) { return !helpers.isBlank(val); },
    },
    email: {
        message: "Please enter a valid email address.",
        validate: function (val) { return helpers.testRegex(val, /^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i); },
    },
    password: {
        message: "Password required.",
        validate: function (val) { return !helpers.isBlank(val); },
    },
    firstName: {
        message: "Please enter a valid :attribute.",
        validate: function (val) { return helpers.testRegex(val, /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/); },
    },
    lastName: {
        message: "Please enter a valid :attribute.",
        validate: function (val) { return helpers.testRegex(val, /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/); },
    },
    verifyPhoneCode: {
        message: "Please enter a valid verification code.",
        validate: function (val) { return helpers.testRegex(val, /^([0-9]{6})$/); },
    },
    verifyEmailCode: {
        message: "Please enter a valid verification code.",
        validate: function (val) { return helpers.testRegex(val, /^([0-9]{6})$/); },
    },
    verifyCreditCard: {
        message: "Please enter a valid verification code.",
        validate: function (val) { return helpers.testRegex(val, /^([0-9]{6})$/); },
    },
    cryptocurrencyAddress: {
        message: "Please enter a valid wallet address.",
        validate: function (val) { return helpers.validateWalletAddress(val); },
    },
    currency: {
        message: "The :attribute must be a valid currency.",
        validate: function (val) { return helpers.testRegex(val, /^[\$£€¥]?(\d{1,3})(\,?\d{3})*\.?\d{0,2}$/); },
    },
    street: {
        message: "Please enter a valid :attribute.",
        validate: function (val) { return helpers.testRegex(val, /^[a-zA-Z0-9\s,'-]*$/); },
    },
    town: {
        message: "Please enter a valid :attribute.",
        validate: function (val) { return helpers.testRegex(val, /^(?:[A-Za-z]{2,}(?:(\.\s|'s\s|\s?-\s?|\s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$/); },
    },
    postCode: {
        message: "Please enter a valid :attribute.",
        validate: function (val) { return helpers.testRegex(val, /^[A-Z0-9_-]*$/); },
    },
    phoneNumber: {
        message: "Please enter a valid :attribute.",
        validate: function (val) { return helpers.testRegex(val, /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/) && !helpers.testRegex(val, /^\b(\d)\1{8,}\b$/); },
    },
    ccNumber: {
        message: "Please enter a valid credit card number.",
        validate: function (val) {
            return helpers.testRegex(val, /^\d{4}\s?\d{4,6}\s?\d{4,5}\s?\d{0,8}$/);
        },
    },
    ccMonth: {
        message: "Please enter a valid month.",
        validate: function (val) {
            return helpers.testRegex(val, /^(0[1-9]|1[0-2])/);
        },
    },
    ccYear: {
        message: "Please enter a valid year.",
        validate: function (val) {
            return helpers.testRegex(val, /^([0-9]{2})$/) && !helpers.isPastYear(val);
        },
    },
    ccCVV: {
        message: "Please enter a valid cvv.",
        validate: function (val) {
            return helpers.testRegex(val, /^([0-9]{3})$/);
        },
    },
};
//# sourceMappingURL=default.rules.js.map