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
import { Button, Modal, Dropdown, ProgressBar } from "react-bootstrap";
import {
  tokenChanged,
  streamAmountChanged,
  recipientAddressChanged,
  endTimeChanged,
} from "../store/actions";
import Dropdowns from "./Dropdowns";
import tetherLogo from "../img/tether.png";

const CreateStream = (props) => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const upgradeProgressOne = () => {
    setProgress(25);
  };

  const downgradeProgressOne = () => {
    setProgress(0);
  };

  const upgradeProgressTwo = () => {
    setProgress(50);
  };

  const downgradeProgressTwo = () => {
    setProgress(25);
  };

  const upgradeProgressThree = () => {
    setProgress(75);
  };

  const downgradeProgressThree = () => {
    setProgress(50);
  };
  const upgradeProgressFour = () => {
    setProgress(100);
  };

  const downgradeProgressFour = () => {
    setProgress(75);
  };

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

  let time = `${textDay} Days ${textHour} Hours ${textMinute} Minutes ${textSecond} Seconds`;

  return (
    <>
      {/* {everpayLoaded && tetherLoaded ? ( */}
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
          keyboard={true}
          fullscreen="lg-down"
          animation={true}
          dialogClassName="stream-modal"
        >
          <Modal.Header className="modal-title" closeButton>
            <Modal.Title className="modal-title">Create Stream</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              className="modal-body"
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
                  if (e.target.value.length > 0 && e.target.value > 0) {
                    upgradeProgressOne();
                  } else if (e.target.value.length < 1) {
                    downgradeProgressOne();
                  }
                }}
                className="stream-amount"
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
                    upgradeProgressTwo();
                  }
                }}
                className="stream-amount"
                required
              />
              <Dropdown className="">
                <p>What token will be streamed?</p>
                <Dropdown.Toggle variant="" className="dropdown-buttons" id="">
                  <img
                    src={tetherLogo}
                    style={{
                      width: "45px",
                      height: "45px",
                      marginRight: "5px",
                    }}
                    alt=""
                  />
                  Tether
                </Dropdown.Toggle>

                <Dropdown.Menu className="tether-option">
                  <Dropdown.Item
                    className="tether-option"
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(tokenChanged(tether._address));
                      upgradeProgressThree();
                    }}
                  >
                    <img
                      src={tetherLogo}
                      style={{
                        width: "45px",
                        height: "45px",
                        marginRight: "5px",
                      }}
                      alt=""
                    />
                    Tether
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <p>For how long should the tokens be streamed?</p>
              <p className="final-time">{`${endTime ? time : ""}`}</p>
              <Dropdowns upgradeProgressFour={upgradeProgressFour} />

              {everpayLoaded && tetherLoaded ? (
                <button
                  className="btn btn-primary stream-button form-group"
                  type="submit"
                >
                  Approve Funds
                </button>
              ) : (
                ""
              )}
              <ProgressBar
                striped
                animated={true}
                variant="success"
                now={progress}
              />
            </form>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {everpayLoaded && tetherLoaded ? (
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
                    tether._address,
                    endTime,
                    approved
                  );
                  handleClose();
                }}
              >
                Stream
              </Button>
            ) : (
              ""
            )}
          </Modal.Footer>
        </Modal>
      </div>
      {/* ) : (
        <div></div>
      )} */}
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
