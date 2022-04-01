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
  cancelCreated,
  cancelCreating,
  allWithdrawlsLoaded,
  allCancelsLoaded,
  streamingStatusChanged,
  accountBalanceChanged,
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
  // Fetch streams with the 'Stream' event stream
  const streamsCasted = await everpay.getPastEvents("Stream", {
    fromBlock: 0,
    toBlock: "latest",
  });
  // Format streams
  const allStreams = streamsCasted.map((event) => event.returnValues);
  // Add streams to the redux store
  dispatch(allStreamsLoaded(allStreams));

  // Fetch withdrawls with the 'Withdraw' event stream
  const withdrawlStream = await everpay.getPastEvents("Withdraw", {
    fromBlock: 0,
    toBlock: "latest",
  });
  // Format withdrawls
  const allWithdrawls = withdrawlStream.map((event) => event.returnValues);
  // Add withdrawls to the redux store
  dispatch(allWithdrawlsLoaded(allWithdrawls));
  // Fetch cancels with the 'Cancel' event stream
  const cancelStream = await everpay.getPastEvents("Cancel", {
    fromBlock: 0,
    toBlock: "latest",
  });
  // Format withdrawls
  const allCancels = cancelStream.map((event) => event.returnValues);
  // Add withdrawls to the redux store
  dispatch(allCancelsLoaded(allCancels));
};

export const subscribeToEvents = async (everpay, dispatch) => {
  everpay.events.Stream({}, (error, event) => {
    dispatch(streamCreated(event.returnValues));
  });

  everpay.events.Withdraw({}, (error, event) => {
    dispatch(withdrawCreated(event.returnValues));
  });

  everpay.events.Cancel({}, (error, event) => {
    dispatch(cancelCreated(event.returnValues));
  });
};

export const showBalances = async (dispatch, account, tether, everpay) => {
  const web3 = new Web3(window.ethereum);
  // function tokens(number) {
  //   return web3.utils.toWei(number, "ether");
  // }
  let balanceOfAccount = await tether.methods.balanceOf(account).call();
  let balanceOfExchange = await tether.methods
    .balanceOf(tether.options.address)
    .call();
  let depositRemainingBalance = await everpay.methods
    .depositAmountRemaining(
      "0xD87e08b6f01A3134CBDe6851A244b26aB10B0c8F",
      account
    )
    .call();
  dispatch(
    accountBalanceChanged(
      Math.ceil(web3.utils.fromWei(balanceOfAccount, "ether"))
    )
  );
  console.log(balanceOfAccount);
};

export const approveFunds = (everpay, tether, deposit, account, dispatch) => {
  const web3 = new Web3(window.ethereum);
  tether.methods
    .approve(
      everpay.options.address,
      web3.utils.toWei(deposit.toString(), "ether")
    )
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
    const web3 = new Web3(window.ethereum);
    everpay.methods
      .stream(
        receiver,
        web3.utils.toWei(deposit.toString(), "ether"),
        streamToken,
        endTime
      )
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
  const web3 = new Web3(window.ethereum);
  everpay.methods
    .withdraw(web3.utils.toWei(balance.toString(), "ether"), sender)
    .send({ from: account })
    .on("transactionHash", (hash) => {
      dispatch(withdrawCreating());
    })
    .on("error", (error) => {
      console.error(error);
      window.alert(`There was an error!`);
    });
};

export const cancelFunc = (dispatch, everpay, account, receiver) => {
  everpay.methods
    .cancel(receiver)
    .send({ from: account })
    .on("transactionHash", (hash) => {
      dispatch(cancelCreating());
    })
    .on("error", (error) => {
      console.error(error);
      window.alert(`There was an error!`);
    });
};

export const isStreamingFunc = async (dispatch, everpay, account, receiver) => {
  let receiverStreamingStatus = await everpay.methods
    .isStreaming(receiver)
    .call();
  dispatch(streamingStatusChanged(receiverStreamingStatus));
};
