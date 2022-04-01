import "./App.css";
import React from "react";
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
import { Dropdown } from "react-bootstrap";
import { endTimeChanged } from "../store/actions";

const Dropdowns = (props) => {
  const { dispatch, everpayLoaded, tetherLoaded } = props;

  return (
    <>
      {everpayLoaded && tetherLoaded ? (
        <>
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
        </>
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

export default connect(mapStateToProps)(Dropdowns);
