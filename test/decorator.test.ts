import { OnramperValidator, isValidData, validate, Gateway } from "../src";

const wyreData = {
  cryptocurrencyAddress: "rwt65q8et5q8etqtqwtqetqe",
  firstName: "James",
  lastName: "Bond",
  email: "James@gmail.com",
  phoneCountryCode: 31,
  // phoneNumber: 12345678,
  // street: "Test street",
  // town: "Test town",
  // postCode: "123578",
  // country: "nl",
  // state: "undefined",
  ccNumber: "111122223333444",
  ccMonth: "12",
  ccYear: "2043",
  //   ccCVV: "435",
  termsOfUse: true,
};

class DecoratorTest {
  @validate
  controllerMethod(@isValidData data: any) {
    console.log("Running method logic");
  }
}

const decorator = new DecoratorTest();
decorator.controllerMethod(wyreData);
