import * as helpers from "../../src/helpers";

it("should be a valid validate wallet address", () => {
  const isValid = helpers.validateWalletAddress(
    "BTC:1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck"
  );
  expect(isValid).toBe(true);
});

it("should be a validate wallet address when network type is provided as testnet", () => {
  const isValid = helpers.validateWalletAddress(
    "ETH:0x32Be343B94f860124dC4fEe278FDCBD38C102D88:testnet"
  );
  expect(isValid).toBe(true);
});

// it("should return false when a past year is provided", () => {
//   const isValid = helpers.isPastYear("20");
//   expect(isValid).toBe(true);
// });
