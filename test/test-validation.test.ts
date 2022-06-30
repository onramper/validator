import { OnramperValidator, isValidData, validate } from "../src";

// const validator = new OnramperValidator();
// console.log(validator.validateField("email", "abcd@gmailcom", Gateway.Moonpay));

const beData = {
  cryptocurrencyAddress: "rwt65q8et5q8etqtqwtqetqe",
  firstName: "James",
  lastName: "Bond",
  email: "James@gmail.com",
  phoneCountryCode: 31,
  // phoneNumber: 12345678,
  street: "Test street",
  town: "Test town",
  postCode: "123578",
  country: "nl",
  state: "undefined",
  ccNumber: "1234785689975735",
  ccMonth: "45",
  ccYear: "2043",
  ccCVV: "435",
  termsOfUse: true,
};
// const validator = new OnramperValidator();
// validator.validateAll(beData);
// console.log(validator.getErrorMessages());

class DecoratorTest {
  @validate
  decoratorTest(@isValidData data: any) {
    console.log("RUNNING METHOD LOGIC");
  }
}

const decorator = new DecoratorTest();
decorator.decoratorTest(beData);
