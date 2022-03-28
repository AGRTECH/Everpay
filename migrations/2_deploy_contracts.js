const Everpay = artifacts.require("Everpay");
const Tether = artifacts.require("Tether");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Tether);
  const tether = await Tether.deployed();

  await deployer.deploy(Everpay, tether.address);
  const everpay = await Everpay.deployed();
};
