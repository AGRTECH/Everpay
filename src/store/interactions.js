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
  allStreamsLoaded,
  withdrawCreated,
  withdrawCreating,
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

export const loadAllData = async (everpay, dispatch) => {
  // Fetch streams with the 'Poll' event stream
  const streamsCasted = await everpay.getPastEvents("Stream", {
    fromBlock: 0,
    toBlock: "latest",
  });
  // Format streams
  const allStreams = streamsCasted.map((event) => event.returnValues);
  // Add streams to the redux store
  dispatch(allStreamsLoaded(allStreams));
};

export const subscribeToEvents = async (everpay, dispatch) => {
  everpay.events.Stream({}, (error, event) => {
    dispatch(streamCreated(event.returnValues));
  });

  everpay.events.Withdraw({}, (error, event) => {
    dispatch(withdrawCreated(event.returnValues));
  });
};

export const showBalances = async (account, tether, everpay) => {
  let balanceOfReceiver = await tether.methods
    .balanceOf("0x0BC222D3A061745eec274fCbA390b8f9056Abd6a")
    .call();
  let balanceOfExchange = await tether.methods
    .balanceOf(tether.options.address)
    .call();
  let depositRemainingBalance = await everpay.methods
    .depositAmountRemaining(
      account,
      "0x833458Fa5D6116e1476F56DA758f86aC99219e75"
    )
    .call();
  console.log(
    "depositRemaining: ",
    depositRemainingBalance,
    "Receiver balance: ",
    balanceOfReceiver
  );
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

export const withdrawFunc = (dispatch, everpay, account, sender, balance) => {
  everpay.methods
    .withdraw(balance, sender)
    .send({ from: account })
    .on("transactionHash", (hash) => {
      dispatch(withdrawCreating());
    })
    .on("error", (error) => {
      console.error(error);
      window.alert(`There was an error!`);
    });
};
