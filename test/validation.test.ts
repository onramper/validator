import { OnramperValidator, isValidData, validate, Gateway } from "../src";

const validator = new OnramperValidator();
console.log(validator.message("email", "abcdgmail.com"));

// const beData = {
//   cryptocurrencyAddress: "rwt65q8et5q8etqtqwtqetqe",
//   firstName: "James",
//   lastName: "Bond",
//   email: "Jamesgmail.com",
//   phoneCountryCode: 31,
//   //   phoneNumber: 12345678,
//   street: "Test street",
//   town: "Test town",
//   postCode: "123578",
//   country: "nl",
//   state: "undefined",
//   ccNumber: "1234785689975735",
//   ccMonth: "45",
//   ccYear: "2043",
//   ccCVV: "435",
//   termsOfUse: true,
// };

// class DecoratorTest {
//   @validate
//   controllerMethod(@isValidData data: any) {
//     console.log("RUNNING METHOD LOGIC");
//   }
// }

// const decorator = new DecoratorTest();
// decorator.controllerMethod(beData);
