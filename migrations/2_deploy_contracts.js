const Everpay = artifacts.require("Everpay");

module.exports = function (deployer) {
  deployer.deploy(Everpay);
};
