import "./App.css";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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
  allStreamsSelector,
  allStreamsLoadedSelector,
} from "../store/selectors";
import {
  createStreamFunc,
  approveFunds,
  showBalances,
} from "../store/interactions";
import { Button, Modal, Dropdown } from "react-bootstrap";
import {
  tokenChanged,
  streamAmountChanged,
  recipientAddressChanged,
  endTimeChanged,
} from "../store/actions";
import Timer from "./Timer";
import Streaming from "./Streaming";
import StreamChart from "./StreamChart";

const ActiveStreams = (props) => {
  const renderStream = (stream, props) => {
    const { dispatch, everpay, account } = props;
    if (account === stream._receiver) {
      return (
        <>
          <Streaming
            streamDeposit={parseInt(stream._deposit)}
            streamRatePerSecond={parseInt(stream._rate)}
            streamSender={stream._sender}
          />
        </>
      );
    } else {
      return <div>You aren't being streamed to currently</div>;
    }
  };
  const showStreams = (props) => {
    const { allStreams, allStreamsLoaded } = props;

    return (
      <div>
        <h1>Your Stream</h1>
        {allStreamsLoaded && allStreams.data.length > 0 ? (
          allStreams.data.map((stream) => renderStream(stream, props))
        ) : (
          <p>No streams to show...</p>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="">
        {props.allStreamsLoaded ? (
          showStreams(props)
        ) : (
          <p>"No active streams right now..."</p>
        )}
      </div>
    </>
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
    allStreams: allStreamsSelector(state),
    allStreamsLoaded: allStreamsLoadedSelector(state),
  };
}

export default connect(mapStateToProps)(ActiveStreams);
