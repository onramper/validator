import { OnramperValidator, isValidData, validate, Gateway } from "../src";

const validator = new OnramperValidator();
console.log(validator.message("cryptocurrencyAddress", "BTC:1KFzzGtDdnq5h"));
