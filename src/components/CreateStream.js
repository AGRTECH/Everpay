import "./App.css";
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
            }} */}
          {/* >
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

                <Dropdown className="form-group">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Time interval (in seconds)
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-scroll">
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
                <Dropdown className="form-group">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Time interval (in minutes)
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-scroll">
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(60));
                      }}
                    >
                      1m
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(120));
                      }}
                    >
                      2m
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(180));
                      }}
                    >
                      3m
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(240));
                      }}
                    >
                      4m
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(300));
                      }}
                    >
                      5m
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(360));
                      }}
                    >
                      6m
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(420));
                      }}
                    >
                      7m
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(480));
                      }}
                    >
                      8m
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(540));
                      }}
                    >
                      9m
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(600));
                      }}
                    >
                      10m
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="form-group">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Time interval (in hours)
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-scroll">
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(3600));
                      }}
                    >
                      1hr
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(7200));
                      }}
                    >
                      2hr
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(10800));
                      }}
                    >
                      3hr
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(14400));
                      }}
                    >
                      4hr
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(18000));
                      }}
                    >
                      5hr
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(21600));
                      }}
                    >
                      6hr
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(25200));
                      }}
                    >
                      7hr
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(28800));
                      }}
                    >
                      8hr
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(32400));
                      }}
                    >
                      9hr
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(36000));
                      }}
                    >
                      10hr
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="form-group">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Time interval (in days)
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-scroll">
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(86400));
                      }}
                    >
                      1 day
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(172800));
                      }}
                    >
                      2 days
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(259200));
                      }}
                    >
                      3 days
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(345600));
                      }}
                    >
                      4 days
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(432000));
                      }}
                    >
                      5 days
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(518400));
                      }}
                    >
                      6 days
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(604800));
                      }}
                    >
                      7 days
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(691200));
                      }}
                    >
                      8 days
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(777600));
                      }}
                    >
                      9 days
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={(e) => {
                        dispatch(endTimeChanged(864000));
                      }}
                    >
                      10 days
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
