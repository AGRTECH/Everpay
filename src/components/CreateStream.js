import "./App.css";
import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { everpaySelector, accountSelector } from "../store/selectors";
import { createStreamFunc } from "../store/interactions";

const CreateStream = (props) => {
  const { dispatch, everpay, account } = props;
  return (
    <div>
      <h1>Create A Stream Here</h1>
      <button onClick={createStreamFunc(dispatch, everpay, account)}>
        Create Stream
      </button>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    everpay: everpaySelector(state),
    account: accountSelector(state),
  };
}

export default connect(mapStateToProps)(CreateStream);
