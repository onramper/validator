import { OnramperValidator, isValidData, validate, Gateway } from "../src";

const validator = new OnramperValidator();
console.log(validator.message("verificationCode", "12345r"));
