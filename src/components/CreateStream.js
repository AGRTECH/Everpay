import "./App.css";
import Web3 from "web3";
import React, { useState } from "react";
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
  requestFunds,
  approveRequestedFunds,
} from "../store/interactions";
import { Button, Modal, Dropdown } from "react-bootstrap";
import {
  tokenChanged,
  streamAmountChanged,
  recipientAddressChanged,
  endTimeChanged,
} from "../store/actions";
import Dropdowns from "./Dropdowns";

const CreateStream = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    allStreams,
    allStreamsLoaded,
  } = props;

  const second = 1;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(endTime / day);
  const textHour = Math.floor((endTime % day) / hour);
  const textMinute = Math.floor((endTime % hour) / minute);
  const textSecond = Math.floor((endTime % minute) / second);

  return (
    <>
      {everpayLoaded && tetherLoaded ? (
        <div className="container-1 shadow">
          <p className="stream-text">Tap the button below to create a stream</p>
          <div className="bar"></div>

          <Button className="stream-button" onClick={handleShow}>
            Stream!
          </Button>
          <p className="funds-text">Need funds to try out app? Click below</p>
          <Button
            className="request-funds-button neg-top"
            onClick={() => {
              requestFunds(everpay, tether, deposit, account, dispatch);
            }}
          >
            Request Test Tether
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header className="modal-title" closeButton>
              <Modal.Title className="modal-title">Create Stream</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                className=""
                onSubmit={(e) => {
                  e.preventDefault();
                  approveFunds(everpay, tether, deposit, account, dispatch);
                }}
              >
                <p>What is the total amount you will stream?</p>
                <input
                  type="text"
                  placeholder="1000 Tether"
                  onChange={(e) => {
                    dispatch(streamAmountChanged(parseInt(e.target.value)));
                  }}
                  className="bg-dark text-white form-group stream-amount mr-2"
                  required
                />
                <p>What address will be receiving this stream?</p>
                <input
                  type="text"
                  placeholder="0x0000..."
                  onChange={(e) => {
                    if (
                      e.target.value.length < 42 ||
                      e.target.value[0] !== "0" ||
                      e.target.value[1] !== "x"
                    ) {
                      return;
                    } else {
                      dispatch(recipientAddressChanged(e.target.value));
                    }
                  }}
                  className="bg-dark text-white form-group stream-amount"
                  required
                />
                <Dropdown className="form-group">
                  <p>What token will be streamed?</p>
                  <Dropdown.Toggle
                    variant="success"
                    className="dropdown-buttons time-amount"
                    id="dropdown-basic"
                  >
                    Token
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(tokenChanged(tether._address));
                      }}
                    >
                      Tether
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <p>For how long should the tokens be streamed?</p>
                <Dropdowns />
                <p className="shadow pl-2">{`Final Time Interval: ${
                  endTime
                    ? `D: ${textDay} H: ${textHour} M: ${textMinute} S: ${textSecond}`
                    : "D: 0  H: 0  M: 0 S: 0"
                }`}</p>
                <button
                  className="btn btn-primary stream-button form-group"
                  type="submit"
                >
                  Approve Funds
                </button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                className="stream-button"
                variant="primary"
                onClick={() => {
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
                  handleClose();
                }}
              >
                Finalize
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <div></div>
      )}
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

export default connect(mapStateToProps)(CreateStream);
