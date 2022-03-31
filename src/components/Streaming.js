import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import StreamChart from "./StreamChart";
import { withdrawFunc, cancelFunc } from "../store/interactions";
import { everpaySelector, accountSelector } from "../store/selectors";
import { Button } from "react-bootstrap";

const Streaming = (props) => {
  // parseInt(props.streamReceiverBalance)
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
            }}
          >
            Withdraw Balance
          </Button>
          <p>
            Withdrawn: {receiverStreamBalance} / {props.streamDeposit}
          </p>
        </>
      ) : (
        <Button
          variant="danger"
          onClick={(e) => {
            cancelFunc(
              props.dispatch,
              props.everpay,
              props.account,
              props.streamReceiver
            );
          }}
        >
          Cancel Stream
        </Button>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    everpay: everpaySelector(state),
    account: accountSelector(state),
  };
}

export default connect(mapStateToProps)(Streaming);
