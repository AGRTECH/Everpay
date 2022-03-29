import Web3 from "web3";
import Tether from "../abis/Tether.json";
import Everpay from "../abis/Everpay.json";
import {
  web3Loaded,
  web3AccountLoaded,
  everpayLoaded,
  tetherLoaded,
  streamCreated,
  streamCreating,
  approved,
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

export const subscribeToEvents = async (everpay, dispatch) => {
  everpay.events.Stream({}, (error, event) => {
    dispatch(streamCreated(event.returnValues));
  });
};

export const showBalances = async (account, tether, everpay) => {
  let balance = await tether.methods.balanceOf(account).call();
  let balanceOfExchange = await tether.methods
    .balanceOf(tether.options.address)
    .call();
  console.log("balance account: ", balance);
};

export const approveFunds = (everpay, tether, deposit, account, dispatch) => {
  tether.methods
    .approve(everpay.options.address, deposit)
    .send({ from: account })
    .on("transactionHash", (hash) => {
      dispatch(approved());
    })
    .on("error", (error) => {
      console.error(error);
      window.alert(`There was an error!`);
    });
};

export const createStreamFunc = (
  dispatch,
  everpay,
  account,
  receiver,
  deposit,
  streamToken,
  endTime,
  approved
) => {
  if (approved) {
    everpay.methods
      .stream(receiver, deposit, streamToken, endTime)
      .send({ from: account })
      .on("transactionHash", (hash) => {
        dispatch(streamCreating());
      })
      .on("error", (error) => {
        console.error(error);
        window.alert(`There was an error!`);
      });
  }
};
