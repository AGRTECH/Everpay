import "./App.css";
import React, { Component, useState, useEffect } from "react";
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
} from "../store/selectors";
// import { createStreamFunc } from "../store/interactions";
import { Button, Modal, Dropdown } from "react-bootstrap";
import {
  tokenChanged,
  streamAmountChanged,
  recipientAddressChanged,
  endTimeChanged,
} from "../store/actions";

const CreateStream = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const filler = () => {
    return "not working";
  };

  const { dispatch, everpay, account, everpayLoaded, tether } = props;

  return (
    <>
      {everpayLoaded ? (
        <div>
          <h1>Create A Stream Here</h1>
          {/* <button onClick={createStreamFunc(dispatch, everpay, account)}> */}
          {/* Create Stream */}
          {/* </button> */}
          <Button variant="primary" onClick={handleShow}>
            Stream!
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create Stream</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                className=""
                onSubmit={(e) => {
                  e.preventDefault();
                  // createStreamFunc(dispatch, everpay, account);
                }}
              >
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Token
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(tokenChanged(tether._address));
                        console.log(tether._address);
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
                    dispatch(streamAmountChanged(e.target.value));
                  }}
                  className="bg-dark text-white "
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
                  className="bg-dark text-white "
                  required
                />
                <input
                  type="text"
                  placeholder="End Time"
                  onChange={(e) => {
                    // dispatch(endTimeChanged(e.target.value));
                  }}
                  className="bg-dark text-white "
                  required
                />
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Time interval (in seconds)
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(1));
                      }}
                    >
                      1s
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(2));
                      }}
                    >
                      2s
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(3));
                      }}
                    >
                      3s
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(4));
                      }}
                    >
                      4s
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(5));
                      }}
                    >
                      5s
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(6));
                      }}
                    >
                      6s
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(7));
                      }}
                    >
                      7s
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(8));
                      }}
                    >
                      8s
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(9));
                      }}
                    >
                      9s
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(10));
                      }}
                    >
                      10s
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <button className="btn btn-primary" type="submit">
                  Create Stream
                </button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Finalize
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <div>Not loaded</div>
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
    receiver: receiverSelector(state),
    deposit: depositSelector(state),
    streamToken: streamTokenSelector(state),
    endTime: endTimeSelector(state),
  };
}

export default connect(mapStateToProps)(CreateStream);
