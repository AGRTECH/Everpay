require("chai").use(require("chai-as-promised")).should();

const Everpay = artifacts.require("./Everpay");
const Tether = artifacts.require("./Tether");

contract("Everypay", ([deployer, sender, receiver]) => {
  let everpay;
  let tether;
  function tokens(number) {
    return web3.utils.toWei(number, "ether");
  }
  beforeEach(async () => {
    tether = await Tether.new();
    everpay = await Everpay.new(tether.address);
    await tether.transfer(sender, tokens("5000"), { from: deployer });
  });

  describe("Stream", async () => {
    // beforeEach(async () => {
    //   await everpay.stream(receiver, tokens("3000"), tether.address, 0, 15, {
    //     from: sender,
    //   });
    // });
    it("Streams Money", async () => {
      // let balanceOfSender = await tether.balanceOf(sender);
      // console.log("balance of sender", balanceOfSender.toString());
      let balanceOfReceiver = await everpay.balanceOf(sender);
      console.log(
        "balance of receiver after transfer",
        balanceOfReceiver.toString()
      );
    });
  });
});
