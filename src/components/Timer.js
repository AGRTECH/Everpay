import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStreamFunc } from "../store/interactions";
import {
  everpaySelector,
  accountSelector,
  everpayLoadedSelector,
  tetherSelector,
  receiverSelector,
  depositSelector,
  streamTokenSelector,
  endTimeSelector,
  tetherLoadedSelector,
  approvedSelector,
} from "../store/selectors";

const Timer = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const {
    dispatch,
    everpay,
    account,
    everpayLoaded,
    tether,
    receiver,
    endTime,
    deposit,
    streamToken,
    approved,
    tetherLoaded,
  } = props;
  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        createStreamFunc(
          dispatch,
          everpay,
          account,
          receiver,
          deposit,
          streamToken,
          endTime,
          approved
        );
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div>
      Seconds: {seconds}
      <br />
      <button
        onClick={() => {
          setIsActive(true);
        }}
      >
        {" "}
        Start{" "}
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    everpay: everpaySelector(state),
    tether: tetherSelector(state),
    account: accountSelector(state),
    everpayLoaded: everpayLoadedSelector(state),
    tetherLoaded: tetherLoadedSelector(state),
    receiver: receiverSelector(state),
    deposit: depositSelector(state),
    streamToken: streamTokenSelector(state),
    endTime: endTimeSelector(state),
    approved: approvedSelector(state),
  };
}

export default connect(mapStateToProps)(Timer);
