import React, { useState, useEffect } from "react";
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
  let receiverStreamBalance = parseInt(props.streamReceiverBalance);
  const [balance, setBalance] = useState(receiverStreamBalance);
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setBalance((balance) => {
        if (balance < props.streamDeposit) {
          return balance + props.streamRatePerSecond;
        } else {
          return balance;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log(balance);
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
                balance
              );
              // localStorage.removeItem(`balance${props.streamId}`);
            }}
          >
            Withdraw Balance
          </Button>
          <p>
            Withdrawn: {receiverStreamBalance} / {props.streamDeposit}
          </p>
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
          <p>
            Sent: {balance} / {props.streamDeposit}
          </p>
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
