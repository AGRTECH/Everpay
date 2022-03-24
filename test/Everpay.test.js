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
    await tether.transfer(sender, tokens("5000"));
  });

  describe("Stream", async () => {
    beforeEach(async () => {
      await tether.approve(everpay.address, tokens("3000"), { from: sender });
      await everpay.stream(receiver, tokens("3000"), tether.address, 0, 15, {
        from: sender,
      });
    });
    it("Streams Money", async () => {
      let balanceOfReceiver = await tether.balanceOf(receiver);
      assert.equal(balanceOfReceiver, tokens("200"));
      let streamBalance = await everpay.streamBalanceOf(receiver);
      assert.equal(streamBalance.toString(), "200");
    });
  });
});
