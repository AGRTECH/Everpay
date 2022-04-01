import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { connect } from "react-redux";
import "./App.css";
import StreamChart from "./StreamChart";
import {
  withdrawFunc,
  cancelFunc,
  isStreamingFunc,
} from "../store/interactions";
import {
  everpaySelector,
  accountSelector,
  allStreamsSelector,
  allStreamsLoadedSelector,
} from "../store/selectors";
import { Button } from "react-bootstrap";

const Streaming = (props) => {
  const web3 = new Web3(window.ethereum);
  function tokens(number) {
    return web3.utils.fromWei(number, "ether");
  }
  let receiverStreamBalance = parseInt(props.streamReceiverBalance);
  const [balance, setBalance] = useState(
    Math.ceil(props.streamReceiverBalance / 10 ** 18) * 10 ** 18
  );
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setBalance((balance) => {
        if (
          balance < props.streamDeposit &&
          balance + props.streamRatePerSecond <= props.streamDeposit
        ) {
          return balance + props.streamRatePerSecond;
        } else if (
          balance < props.streamDeposit &&
          balance + props.streamRatePerSecond > props.streamDeposit
        ) {
          return (balance = props.streamDeposit);
        } else {
          return balance;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log(balance / 10 ** 18);
  // let localStorageBalance;
  // if (
  //   localStorage.getItem(`balance${props.streamId}`) <
  //     parseInt(props.streamDeposit) ||
  //   !localStorage.getItem(`balance${props.streamId}`)
  // ) {
  //   localStorage.setItem(`balance${props.streamId}`, balance);
  // }
  // localStorageBalance = localStorage.getItem(`balance${props.streamId}`);
  // let formattedBalance = (localStorageBalance / props.streamDeposit) * 100;
  // if (props.allStreamsLoaded) {
  //   console.log(
  //     props.allStreams.data.splice(props.streamId - 1, 1),
  //     props.allStreams.data[props.streamId - 1]
  //   );
  // }
  let formattedBalance = (balance / props.streamDeposit) * 100;
  let noDecimalBalance = Math.ceil(parseInt(balance));
  let noDecimalDeposit = Math.ceil(parseInt(props.streamDeposit));
  console.log(Math.ceil(props.streamReceiverBalance / 10 ** 18));
  return (
    <>
      {/* <p>{isNaN(balance) ? "No stream active" : balance}</p> */}
      <StreamChart balance={formattedBalance} />
      {props.currentAccount === props.streamReceiver ? (
        <>
          <Button
            variant="primary"
            onClick={(e) => {
              withdrawFunc(
                props.dispatch,
                props.everpay,
                props.account,
                props.streamSender,
                balance / 10 ** 18
              );
              // localStorage.removeItem(`balance${props.streamId}`);
            }}
          >
            Withdraw Balance
          </Button>
          <div className="flex-text">
            <p className="mr-4">
              Sent: {Math.ceil(balance / 10 ** 18)} /
              {Math.ceil(props.streamDeposit / 10 ** 18)}
            </p>
            <p>
              Withdrawn: {Math.ceil(props.streamReceiverBalance / 10 ** 18)} /
              {Math.ceil(props.streamDeposit / 10 ** 18)}
            </p>
          </div>
        </>
      ) : (
        <>
          <Button
            variant="danger"
            onClick={(e) => {
              cancelFunc(
                props.dispatch,
                props.everpay,
                props.account,
                props.streamReceiver
              );
              isStreamingFunc(
                props.dispatch,
                props.everpay,
                props.account,
                props.streamReceiver
              );
              // localStorage.removeItem(`balance${props.streamId}`);
            }}
          >
            Cancel Stream
          </Button>
          <div className="flex-text">
            <p className="mr-4">
              Sent: {Math.ceil(balance / 10 ** 18)} /
              {Math.ceil(props.streamDeposit / 10 ** 18)}
            </p>
            <p>
              Withdrawn: {Math.ceil(props.streamReceiverBalance / 10 ** 18)} /
              {Math.ceil(props.streamDeposit / 10 ** 18)}
            </p>
          </div>
        </>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    everpay: everpaySelector(state),
    account: accountSelector(state),
    allStreams: allStreamsSelector(state),
    allStreamsLoaded: allStreamsLoadedSelector(state),
  };
}

export default connect(mapStateToProps)(Streaming);
