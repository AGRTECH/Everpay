require("chai").use(require("chai-as-promised")).should();

const Everpay = artifacts.require("./Everpay");

contract("Everypay", () => {
  let everpay;
  let value;
  beforeEach(async () => {
    everpay = await Everpay.new();
  });
  describe("", async () => {
    it("", async () => {});
  });
});
