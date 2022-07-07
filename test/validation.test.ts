import { OnramperValidator, isValidData, validate, Gateway } from "../src";

const validator = new OnramperValidator();
console.log(validator.message("firstName", "Chamith1"));
