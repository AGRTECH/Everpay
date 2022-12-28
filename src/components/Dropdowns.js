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
import { Dropdown, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { endTimeChanged } from "../store/actions";

const Dropdowns = (props) => {
  const { dispatch, everpayLoaded, tetherLoaded } = props;

  return (
    <>
      {/* {everpayLoaded && tetherLoaded ? ( */}
      <>
        {/* <div className=""> */}
        {/* <Dropdown className="form-group">
              <Dropdown.Toggle variant="" className="dropdown-buttons">
                Add Seconds
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-scroll">
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(1));
                    props.upgradeProgressFour();
                  }}
                >
                  1s
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(2));
                    props.upgradeProgressFour();
                  }}
                >
                  2s
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(3));
                    props.upgradeProgressFour();
                  }}
                >
                  3s
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(4));
                    props.upgradeProgressFour();
                  }}
                >
                  4s
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(5));
                    props.upgradeProgressFour();
                  }}
                >
                  5s
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(6));
                    props.upgradeProgressFour();
                  }}
                >
                  6s
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(7));
                    props.upgradeProgressFour();
                  }}
                >
                  7s
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(8));
                    props.upgradeProgressFour();
                  }}
                >
                  8s
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(9));
                    props.upgradeProgressFour();
                  }}
                >
                  9s
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(10));
                    props.upgradeProgressFour();
                  }}
                >
                  10s
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Dropdown className="form-group">
            <Dropdown.Toggle variant="" className="dropdown-buttons">
              Add Minutes
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-scroll">
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(60));
                  props.upgradeProgressFour();
                }}
              >
                1m
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(120));
                  props.upgradeProgressFour();
                }}
              >
                2m
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(180));
                  props.upgradeProgressFour();
                }}
              >
                3m
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(240));
                  props.upgradeProgressFour();
                }}
              >
                4m
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(300));
                  props.upgradeProgressFour();
                }}
              >
                5m
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(360));
                  props.upgradeProgressFour();
                }}
              >
                6m
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(420));
                  props.upgradeProgressFour();
                }}
              >
                7m
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(480));
                  props.upgradeProgressFour();
                }}
              >
                8m
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(540));
                  props.upgradeProgressFour();
                }}
              >
                9m
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(600));
                  props.upgradeProgressFour();
                }}
              >
                10m
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="">
            <Dropdown className="">
              <Dropdown.Toggle variant="" className="dropdown-buttons">
                Add Hours
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-scroll">
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(3600));
                    props.upgradeProgressFour();
                  }}
                >
                  1hr
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(7200));
                    props.upgradeProgressFour();
                  }}
                >
                  2hr
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(10800));
                    props.upgradeProgressFour();
                  }}
                >
                  3hr
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(14400));
                    props.upgradeProgressFour();
                  }}
                >
                  4hr
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(18000));
                    props.upgradeProgressFour();
                  }}
                >
                  5hr
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(21600));
                    props.upgradeProgressFour();
                  }}
                >
                  6hr
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(25200));
                    props.upgradeProgressFour();
                  }}
                >
                  7hr
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(28800));
                    props.upgradeProgressFour();
                  }}
                >
                  8hr
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(32400));
                    props.upgradeProgressFour();
                  }}
                >
                  9hr
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={(e) => {
                    dispatch(endTimeChanged(36000));
                    props.upgradeProgressFour();
                  }}
                >
                  10hr
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Dropdown className="form-group">
            <Dropdown.Toggle variant="" className="dropdown-buttons">
              Add Days
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-scroll">
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(86400));
                  props.upgradeProgressFour();
                }}
              >
                1 day
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(172800));
                  props.upgradeProgressFour();
                }}
              >
                2 days
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(259200));
                  props.upgradeProgressFour();
                }}
              >
                3 days
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(345600));
                  props.upgradeProgressFour();
                }}
              >
                4 days
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(432000));
                  props.upgradeProgressFour();
                }}
              >
                5 days
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(518400));
                  props.upgradeProgressFour();
                }}
              >
                6 days
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(604800));
                  props.upgradeProgressFour();
                }}
              >
                7 days
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(691200));
                  props.upgradeProgressFour();
                }}
              >
                8 days
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(777600));
                  props.upgradeProgressFour();
                }}
              >
                9 days
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  dispatch(endTimeChanged(864000));
                  props.upgradeProgressFour();
                }}
              >
                10 days
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        <Navbar className="dropdown-nav">
          {/* <Container fluid> */}
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="" />
          <Navbar.Collapse id="">
            <Nav>
              <NavDropdown id="" title="Days" menuVariant="">
                <Dropdown.Menu className="dropdown-menu-scroll">
                  <Dropdown.Item
                    className=""
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(86400));
                      props.upgradeProgressFour();
                    }}
                  >
                    1 day
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(172800));
                      props.upgradeProgressFour();
                    }}
                  >
                    2 days
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(259200));
                      props.upgradeProgressFour();
                    }}
                  >
                    3 days
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(345600));
                      props.upgradeProgressFour();
                    }}
                  >
                    4 days
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(432000));
                      props.upgradeProgressFour();
                    }}
                  >
                    5 days
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(518400));
                      props.upgradeProgressFour();
                    }}
                  >
                    6 days
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(604800));
                      props.upgradeProgressFour();
                    }}
                  >
                    7 days
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(691200));
                      props.upgradeProgressFour();
                    }}
                  >
                    8 days
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(777600));
                      props.upgradeProgressFour();
                    }}
                  >
                    9 days
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(864000));
                      props.upgradeProgressFour();
                    }}
                  >
                    10 days
                  </Dropdown.Item>
                </Dropdown.Menu>
              </NavDropdown>
              <NavDropdown id="" title="Hours" menuVariant="">
                <Dropdown.Menu className="dropdown-menu-scroll">
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(3600));
                      props.upgradeProgressFour();
                    }}
                  >
                    1hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(7200));
                      props.upgradeProgressFour();
                    }}
                  >
                    2hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(10800));
                      props.upgradeProgressFour();
                    }}
                  >
                    3hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(14400));
                      props.upgradeProgressFour();
                    }}
                  >
                    4hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(18000));
                      props.upgradeProgressFour();
                    }}
                  >
                    5hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(21600));
                      props.upgradeProgressFour();
                    }}
                  >
                    6hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(25200));
                      props.upgradeProgressFour();
                    }}
                  >
                    7hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(28800));
                      props.upgradeProgressFour();
                    }}
                  >
                    8hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(32400));
                      props.upgradeProgressFour();
                    }}
                  >
                    9hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(36000));
                      props.upgradeProgressFour();
                    }}
                  >
                    10hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(39600));
                      props.upgradeProgressFour();
                    }}
                  >
                    11hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(43200));
                      props.upgradeProgressFour();
                    }}
                  >
                    12hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(46800));
                      props.upgradeProgressFour();
                    }}
                  >
                    13hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(50400));
                      props.upgradeProgressFour();
                    }}
                  >
                    14hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(54000));
                      props.upgradeProgressFour();
                    }}
                  >
                    15hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(57600));
                      props.upgradeProgressFour();
                    }}
                  >
                    16hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(61200));
                      props.upgradeProgressFour();
                    }}
                  >
                    17hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(64800));
                      props.upgradeProgressFour();
                    }}
                  >
                    18hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(68400));
                      props.upgradeProgressFour();
                    }}
                  >
                    19hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(72000));
                      props.upgradeProgressFour();
                    }}
                  >
                    20hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(75600));
                      props.upgradeProgressFour();
                    }}
                  >
                    21hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(79200));
                      props.upgradeProgressFour();
                    }}
                  >
                    22hr
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(82800));
                      props.upgradeProgressFour();
                    }}
                  >
                    23hr
                  </Dropdown.Item>
                </Dropdown.Menu>
              </NavDropdown>
              <NavDropdown id="" title="Mins" menuVariant="">
                <Dropdown.Menu className="dropdown-menu-scroll">
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(60));
                      props.upgradeProgressFour();
                    }}
                  >
                    1m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(120));
                      props.upgradeProgressFour();
                    }}
                  >
                    2m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(180));
                      props.upgradeProgressFour();
                    }}
                  >
                    3m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(240));
                      props.upgradeProgressFour();
                    }}
                  >
                    4m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(300));
                      props.upgradeProgressFour();
                    }}
                  >
                    5m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(360));
                      props.upgradeProgressFour();
                    }}
                  >
                    6m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(420));
                      props.upgradeProgressFour();
                    }}
                  >
                    7m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(480));
                      props.upgradeProgressFour();
                    }}
                  >
                    8m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(540));
                      props.upgradeProgressFour();
                    }}
                  >
                    9m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(600));
                      props.upgradeProgressFour();
                    }}
                  >
                    10m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(660));
                      props.upgradeProgressFour();
                    }}
                  >
                    11m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(720));
                      props.upgradeProgressFour();
                    }}
                  >
                    12m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(780));
                      props.upgradeProgressFour();
                    }}
                  >
                    13m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(840));
                      props.upgradeProgressFour();
                    }}
                  >
                    14m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(900));
                      props.upgradeProgressFour();
                    }}
                  >
                    15m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(960));
                      props.upgradeProgressFour();
                    }}
                  >
                    16m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1020));
                      props.upgradeProgressFour();
                    }}
                  >
                    17m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1080));
                      props.upgradeProgressFour();
                    }}
                  >
                    18m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1140));
                      props.upgradeProgressFour();
                    }}
                  >
                    19m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1200));
                      props.upgradeProgressFour();
                    }}
                  >
                    20m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1260));
                      props.upgradeProgressFour();
                    }}
                  >
                    21m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1320));
                      props.upgradeProgressFour();
                    }}
                  >
                    22m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1380));
                      props.upgradeProgressFour();
                    }}
                  >
                    23m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1440));
                      props.upgradeProgressFour();
                    }}
                  >
                    24m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1500));
                      props.upgradeProgressFour();
                    }}
                  >
                    25m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1560));
                      props.upgradeProgressFour();
                    }}
                  >
                    26m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1620));
                      props.upgradeProgressFour();
                    }}
                  >
                    27m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1680));
                      props.upgradeProgressFour();
                    }}
                  >
                    28m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1740));
                      props.upgradeProgressFour();
                    }}
                  >
                    29m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1800));
                      props.upgradeProgressFour();
                    }}
                  >
                    30m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1860));
                      props.upgradeProgressFour();
                    }}
                  >
                    31m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1920));
                      props.upgradeProgressFour();
                    }}
                  >
                    32m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1980));
                      props.upgradeProgressFour();
                    }}
                  >
                    33m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2040));
                      props.upgradeProgressFour();
                    }}
                  >
                    34m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2100));
                      props.upgradeProgressFour();
                    }}
                  >
                    35m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2160));
                      props.upgradeProgressFour();
                    }}
                  >
                    36m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2220));
                      props.upgradeProgressFour();
                    }}
                  >
                    37m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2280));
                      props.upgradeProgressFour();
                    }}
                  >
                    38m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2340));
                      props.upgradeProgressFour();
                    }}
                  >
                    39m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2400));
                      props.upgradeProgressFour();
                    }}
                  >
                    40m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2460));
                      props.upgradeProgressFour();
                    }}
                  >
                    41m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2520));
                      props.upgradeProgressFour();
                    }}
                  >
                    42m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2580));
                      props.upgradeProgressFour();
                    }}
                  >
                    43m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2640));
                      props.upgradeProgressFour();
                    }}
                  >
                    44m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2700));
                      props.upgradeProgressFour();
                    }}
                  >
                    45m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2760));
                      props.upgradeProgressFour();
                    }}
                  >
                    46m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2820));
                      props.upgradeProgressFour();
                    }}
                  >
                    47m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2880));
                      props.upgradeProgressFour();
                    }}
                  >
                    48m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2940));
                      props.upgradeProgressFour();
                    }}
                  >
                    49m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(3000));
                      props.upgradeProgressFour();
                    }}
                  >
                    50m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(3060));
                      props.upgradeProgressFour();
                    }}
                  >
                    51m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(3120));
                      props.upgradeProgressFour();
                    }}
                  >
                    52m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(3180));
                      props.upgradeProgressFour();
                    }}
                  >
                    53m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(3240));
                      props.upgradeProgressFour();
                    }}
                  >
                    54m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(3300));
                      props.upgradeProgressFour();
                    }}
                  >
                    55m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(3360));
                      props.upgradeProgressFour();
                    }}
                  >
                    56m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(3420));
                      props.upgradeProgressFour();
                    }}
                  >
                    57m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(3480));
                      props.upgradeProgressFour();
                    }}
                  >
                    58m
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(3540));
                      props.upgradeProgressFour();
                    }}
                  >
                    59m
                  </Dropdown.Item>
                </Dropdown.Menu>
              </NavDropdown>
              <NavDropdown id="" title="Seconds" menuVariant="">
                <Dropdown.Menu className="dropdown-menu-scroll">
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(1));
                      props.upgradeProgressFour();
                    }}
                  >
                    1s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(2));
                      props.upgradeProgressFour();
                    }}
                  >
                    2s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(3));
                      props.upgradeProgressFour();
                    }}
                  >
                    3s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(4));
                      props.upgradeProgressFour();
                    }}
                  >
                    4s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(5));
                      props.upgradeProgressFour();
                    }}
                  >
                    5s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(6));
                      props.upgradeProgressFour();
                    }}
                  >
                    6s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(7));
                      props.upgradeProgressFour();
                    }}
                  >
                    7s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(8));
                      props.upgradeProgressFour();
                    }}
                  >
                    8s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(9));
                      props.upgradeProgressFour();
                    }}
                  >
                    9s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(10));
                      props.upgradeProgressFour();
                    }}
                  >
                    10s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(11));
                      props.upgradeProgressFour();
                    }}
                  >
                    11s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(12));
                      props.upgradeProgressFour();
                    }}
                  >
                    12s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(13));
                      props.upgradeProgressFour();
                    }}
                  >
                    13s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(14));
                      props.upgradeProgressFour();
                    }}
                  >
                    14s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(15));
                      props.upgradeProgressFour();
                    }}
                  >
                    15s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(16));
                      props.upgradeProgressFour();
                    }}
                  >
                    16s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(17));
                      props.upgradeProgressFour();
                    }}
                  >
                    17s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(18));
                      props.upgradeProgressFour();
                    }}
                  >
                    18s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(19));
                      props.upgradeProgressFour();
                    }}
                  >
                    19s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(20));
                      props.upgradeProgressFour();
                    }}
                  >
                    20s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(21));
                      props.upgradeProgressFour();
                    }}
                  >
                    21s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(22));
                      props.upgradeProgressFour();
                    }}
                  >
                    22s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(23));
                      props.upgradeProgressFour();
                    }}
                  >
                    23s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(24));
                      props.upgradeProgressFour();
                    }}
                  >
                    24s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(25));
                      props.upgradeProgressFour();
                    }}
                  >
                    25s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(26));
                      props.upgradeProgressFour();
                    }}
                  >
                    26s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(27));
                      props.upgradeProgressFour();
                    }}
                  >
                    27s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(28));
                      props.upgradeProgressFour();
                    }}
                  >
                    28s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(29));
                      props.upgradeProgressFour();
                    }}
                  >
                    29s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(30));
                      props.upgradeProgressFour();
                    }}
                  >
                    30s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(31));
                      props.upgradeProgressFour();
                    }}
                  >
                    31s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(32));
                      props.upgradeProgressFour();
                    }}
                  >
                    32s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(33));
                      props.upgradeProgressFour();
                    }}
                  >
                    33s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(34));
                      props.upgradeProgressFour();
                    }}
                  >
                    34s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(35));
                      props.upgradeProgressFour();
                    }}
                  >
                    35s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(36));
                      props.upgradeProgressFour();
                    }}
                  >
                    36s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(37));
                      props.upgradeProgressFour();
                    }}
                  >
                    37s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(38));
                      props.upgradeProgressFour();
                    }}
                  >
                    38s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(39));
                      props.upgradeProgressFour();
                    }}
                  >
                    39s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(40));
                      props.upgradeProgressFour();
                    }}
                  >
                    40s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(41));
                      props.upgradeProgressFour();
                    }}
                  >
                    41s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(42));
                      props.upgradeProgressFour();
                    }}
                  >
                    42s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(43));
                      props.upgradeProgressFour();
                    }}
                  >
                    43s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(44));
                      props.upgradeProgressFour();
                    }}
                  >
                    44s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(45));
                      props.upgradeProgressFour();
                    }}
                  >
                    45s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(46));
                      props.upgradeProgressFour();
                    }}
                  >
                    46s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(47));
                      props.upgradeProgressFour();
                    }}
                  >
                    47s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(48));
                      props.upgradeProgressFour();
                    }}
                  >
                    48s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(49));
                      props.upgradeProgressFour();
                    }}
                  >
                    49s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(50));
                      props.upgradeProgressFour();
                    }}
                  >
                    50s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(51));
                      props.upgradeProgressFour();
                    }}
                  >
                    51s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(52));
                      props.upgradeProgressFour();
                    }}
                  >
                    52s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(53));
                      props.upgradeProgressFour();
                    }}
                  >
                    53s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(54));
                      props.upgradeProgressFour();
                    }}
                  >
                    54s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(55));
                      props.upgradeProgressFour();
                    }}
                  >
                    55s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(56));
                      props.upgradeProgressFour();
                    }}
                  >
                    56s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(57));
                      props.upgradeProgressFour();
                    }}
                  >
                    57s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(58));
                      props.upgradeProgressFour();
                    }}
                  >
                    58s
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(59));
                      props.upgradeProgressFour();
                    }}
                  >
                    59s
                  </Dropdown.Item>
                </Dropdown.Menu>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </>
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
