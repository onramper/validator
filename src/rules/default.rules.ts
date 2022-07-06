import * as helpers from "../helpers";

export const defaultRules = {
    required: {
      message: "The :attribute is required.",
      validate: (val: any) => !helpers.isBlank(val),
    },
    email: {
      message: "Please enter a valid email address.",
      validate: (val: any) => helpers.testRegex(val,/^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
    },
    firstName: {
      message: "Please enter a valid :attribute.",
      validate: (val: any) => helpers.testRegex(val,/^[a-zA-Z ]{2,30}$/),
    },
    lastName: {
      message: "Please enter a valid :attribute.",
      validate: (val: any) => helpers.testRegex(val,/^[a-zA-Z ]{2,30}$/),
    },
    cryptocurrencyAddress: {
      message: "Please enter a valid wallet address.",
      validate: (val: any) => helpers.validateWalletAddress(val),
    },
    currency: {
      message: "The :attribute must be a valid currency.",
      validate: (val: any) => helpers.testRegex(val, /^[\$£€¥]?(\d{1,3})(\,?\d{3})*\.?\d{0,2}$/),
    },
    street: {
      message: "Please enter a valid :attribute.",
      validate: (val: any) => helpers.testRegex(val, /d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*/),
    },
    town: {
      message: "Please enter a valid :attribute.",
      validate: (val: any) => helpers.testRegex(val, /d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*/),
    },
    postCode: {
      message: "Please enter a valid :attribute.",
      validate: (val: any) => helpers.testRegex(val, /d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*/),
    },
    phoneNumber: {
      message: "Please enter a valid :attribute.",
      validate: (val: any) => helpers.testRegex(val, /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/) && !helpers.testRegex(val, /^\b(\d)\1{8,}\b$/),
    },
    ccNumber: {
      message: "Please enter a valid credit card number.",
      validate: (val: any) =>
        helpers.testRegex(val, /^\d{4}\s?\d{4,6}\s?\d{4,5}\s?\d{0,8}$/),
    },
    ccMonth: {
      message: "Please enter a valid month.",
      validate: (val: any) =>
        helpers.testRegex(val, /^(0[1-9]|1[0-2])/),
    },
    ccYear: {
      message: "Please enter a valid year address.",
      validate: (val: any) =>
        helpers.testRegex(val,/^([0-9]{4}|[0-9]{2})$/),
    },
    ccCVV: {
      message: "Please enter a valid cvv.",
      validate: (val: any) =>
        helpers.testRegex(val, /^[0-9]{3, 4}$/),
    },
  }
