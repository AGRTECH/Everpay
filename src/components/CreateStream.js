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

  return (
    <>
      {everpayLoaded && tetherLoaded ? (
        <div className="container-1 shadow">
          <h1>Create A Stream Here</h1>
          {/* <button
            onClick={() => {
              showBalances(dispatch, account, tether, everpay);
            }}
          >
            Show Balances
          </button> */}
          <Button variant="primary" onClick={handleShow}>
            Stream!
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Create Stream</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                className=""
                onSubmit={(e) => {
                  e.preventDefault();
                  approveFunds(everpay, tether, deposit, account, dispatch);
                }}
              >
                <Dropdown className="form-group">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
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
                <input
                  type="text"
                  placeholder="Stream Amount"
                  onChange={(e) => {
                    dispatch(streamAmountChanged(parseInt(e.target.value)));
                  }}
                  className="bg-dark text-white form-group"
                  required
                />
                <input
                  type="text"
                  placeholder="Recipient Address"
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
                  className="bg-dark text-white form-group"
                  required
                />
                <Dropdowns />
                <button className="btn btn-primary form-group" type="submit">
                  Approve Funds
                </button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
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
        <div>Contracts Not loaded</div>
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
