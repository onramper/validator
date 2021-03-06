import * as helpers from "../helpers";

export const defaultRules = {
    required: {
      message: "The :attribute is required.",
      validate: (val: string) => !helpers.isBlank(val),
    },
    email: {
      message: "Please enter a valid email address.",
      validate: (val: string) => helpers.testRegex(val,/^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
    },
    password: {
      message: "Password is required.",
      validate: (val: string) => !helpers.isBlank(val),
    },
    firstName: {
      message: "Please enter a valid :attribute.",
      validate: (val: string) => helpers.testRegex(val,/^[A-Za-z ,.'-]+$/i),
    },
    lastName: {
      message: "Please enter a valid :attribute.",
      validate: (val: string) => helpers.testRegex(val,/^[A-Za-z ,.'-]+$/i),
    },
    verifyPhoneCode: {
      message: "Please enter a valid verification code.",
      validate: (val: string) => helpers.testRegex(val,/^([0-9]{6})$/),
    },
    verifyEmailCode: {
      message: "Please enter a valid verification code.",
      validate: (val: string) => helpers.testRegex(val,/^([0-9]{6})$/),
    },
    verifyCreditCard: {
      message: "Please enter a valid verification code.",
      validate: (val: string) => helpers.testRegex(val,/^([0-9]{6})$/),
    },
    cryptocurrencyAddress: {
      message: "Please enter a valid wallet address.",
      validate: (val: string) => helpers.validateWalletAddress(val),
    },
    currency: {
      message: "The :attribute must be a valid currency.",
      validate: (val: string) => helpers.testRegex(val, /^[\$£€¥]?(\d{1,3})(\,?\d{3})*\.?\d{0,2}$/),
    },
    street: {
      message: "Please enter a valid :attribute.",
      validate: (val: string) => helpers.testRegex(val, /^[a-zA-Z0-9\s,'-]*$/),
    },
    town: {
      message: "Please enter a valid :attribute.",
      validate: (val: string) => helpers.testRegex(val, /^(?:[A-Za-z]{2,}(?:(\.\s|'s\s|\s?-\s?|\s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$/),
    },
    postCode: {
      message: "Please enter a valid :attribute.",
      validate: (val: string) => helpers.testRegex(val, /^[A-Z0-9_-]*$/),
    },
    phoneNumber: {
      message: "Please enter a valid :attribute.",
      validate: (val: string) => helpers.testRegex(val, /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/) && !helpers.testRegex(val, /^\b(\d)\1{8,}\b$/),
    },
    ccNumber: {
      message: "Please enter a valid credit card number.",
      validate: (val: string) =>
        helpers.testRegex(val, /^\d{4}\s?\d{4,6}\s?\d{4,5}\s?\d{0,8}$/),
    },
    ccMonth: {
      message: "Please enter a valid month.",
      validate: (val: string) =>
        helpers.testRegex(val, /^(0[1-9]|1[0-2])/),
    },
    ccYear: {
      message: "Please enter a valid year.",
      validate: (val: string) =>
        helpers.testRegex(val,/^([0-9]{2})$/) && !helpers.isPastYear(val),
    },
    ccCVV: {
      message: "Please enter a valid cvv.",
      validate: (val: string) =>
        helpers.testRegex(val, /^([0-9]{3})$/),
    },
  }
