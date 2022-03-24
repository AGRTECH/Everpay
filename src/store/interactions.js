import Web3 from "web3";
import Tether from "../abis/Tether.json";
import Everpay from "../abis/Everpay.json";
import {
  web3Loaded,
  web3AccountLoaded,
  everpayLoaded,
  tetherLoaded,
} from "./actions";

export const loadWeb3 = (dispatch) => {
  const web3 = new Web3(window.ethereum);
  dispatch(web3Loaded(web3));
  return web3;
};

export const loadAccount = async (web3, dispatch) => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  dispatch(web3AccountLoaded(account));
  return account;
};

export const loadTether = async (web3, networkId, dispatch) => {
  try {
    const tether = new web3.eth.Contract(
      Tether.abi,
      Tether.networks[networkId].address
    );
    dispatch(tetherLoaded(tether));
    return tether;
  } catch (error) {
    console.log(
      "Contract not deployed to the current network, Please select another network with Metamask"
    );
    return null;
  }
};

export const loadEverpay = async (web3, networkId, dispatch) => {
  try {
    const everpay = new web3.eth.Contract(
      Everpay.abi,
      Everpay.networks[networkId].address
    );
    dispatch(everpayLoaded(everpay));
    return everpay;
  } catch (error) {
    console.log(
      "Contract not deployed to the current network, Please select another network with Metamask"
    );
    return null;
  }
};
