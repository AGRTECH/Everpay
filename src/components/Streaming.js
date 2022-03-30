import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import StreamChart from "./StreamChart";
import { withdrawFunc } from "../store/interactions";
import { everpaySelector, accountSelector } from "../store/selectors";

const Streaming = (props) => {
  const [balance, setBalance] = useState(0);
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
      <p>{isNaN(balance) ? "No stream active" : balance}</p>
      <StreamChart balance={formattedBalance} />
      <button
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
      </button>
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
