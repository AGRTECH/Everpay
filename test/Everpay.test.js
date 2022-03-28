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
      await everpay.stream(receiver, tokens("3000"), tether.address, 15, {
        from: sender,
      });
      await everpay.stream(receiver, tokens("3000"), tether.address, 15, {
        from: sender,
      });
    });
    it("Streams Money Twice", async () => {
      //  tether balance after 1 stream
      let balanceOfReceiver = await tether.balanceOf(receiver);
      assert.equal(balanceOfReceiver, tokens("400"));

      // stream balance after 1 stream
      let streamBalance = await everpay.streamBalanceOf(sender, receiver);
      assert.equal(streamBalance.toString(), tokens("400"));

      // depositAmountRemaining mapping
      let depositAmountLeft = await everpay.depositAmountRemaining(
        sender,
        receiver
      );
      assert.equal(depositAmountLeft, tokens("2600"));

      // everpay contract balance
      let everpayBalance = await tether.balanceOf(everpay.address);
      assert.equal(everpayBalance, tokens("2600"));

      // Log sender balance
      let senderBalance = await tether.balanceOf(sender);
    });
  });
  describe("Cancel", async () => {
    beforeEach(async () => {
      await tether.approve(everpay.address, tokens("3000"), { from: sender });
      await everpay.stream(receiver, tokens("3000"), tether.address, 15, {
        from: sender,
      });
      await everpay.stream(receiver, tokens("3000"), tether.address, 15, {
        from: sender,
      });
      await everpay.cancel(receiver, tether.address, {
        from: sender,
      });
    });
    it("Cancels", async () => {
      let balanceOfSender = await tether.balanceOf(sender);
      assert.equal(balanceOfSender.toString(), tokens("4600"));
      let balanceOfContract = await tether.balanceOf(deployer);
      console.log(deployer, balanceOfContract.toString());
    });
  });
});
