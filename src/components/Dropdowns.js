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
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={(e) => {
                      dispatch(endTimeChanged(86400));
                      props.upgradeProgressFour();
                    }}
                  >
                    24hr
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
