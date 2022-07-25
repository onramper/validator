import { OnramperValidator, isValidData, validate, Gateway } from "../../src";

describe("Onramper Validator Tests", () => {
  let validator: OnramperValidator;

  beforeAll(() => {
    validator = new OnramperValidator();
  });

  it("should be a valid first name", () => {
    validator.message("firstName", "Chamith");
  });

  it("should be a data object", () => {
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

    validator.validateAll(wyreData);
  });
});
