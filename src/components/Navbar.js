import "./App.css";
import { connect } from "react-redux";
import {
  accountSelector,
  everpayLoadedSelector,
  accountBalanceSelector,
} from "../store/selectors";
import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
      <a className="navbar-brand" href="/#">
        Everpay
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <p className="nav-link small mr-4">
            Tether Balance:{" "}
            {props.everpayLoaded ? props.accountBalance : "loading..."}
          </p>
        </li>
        <li className="nav-item">
          <a
            className="nav-link small"
            href={`https://etherscan.io/address/${props.account}`}
          >
            {props.everpayLoaded
              ? `Account: ${props.account
                  .split("")
                  .splice(0, 5, "")
                  .join("")}...${props.account
                  .split("")
                  .splice(38, 4, "")
                  .join("")}`
              : "Log into metamask!"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    account: accountSelector(state),
    everpayLoaded: everpayLoadedSelector(state),
    accountBalance: accountBalanceSelector(state),
  };
}

export default connect(mapStateToProps)(Navbar);
