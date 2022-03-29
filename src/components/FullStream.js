import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
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
import { createStreamFunc } from "../store/interactions";

const FullStream = (props) => {
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

  // const [seconds, setSeconds] = useState(props.time);
  useEffect(() => {
    // setInterval(() => {
    // setSeconds((seconds) => {
    // if (seconds > 0) {
    //   return seconds - 1;
    // } else {
    //   return "Poll end";
    // }
    // });
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
    // console.log(
    //   createStreamFunc(
    //     dispatch,
    //     everpay,
    //     account,
    //     receiver,
    //     deposit,
    //     streamToken,
    //     endTime,
    //     approved
    //   )
    // );
    // }, 1000);
  }, []);

  return <></>;
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

export default connect(mapStateToProps)(FullStream);
