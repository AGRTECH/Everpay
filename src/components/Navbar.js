import "./App.css";
import { connect } from "react-redux";
import {
  accountSelector,
  everpayLoadedSelector,
  accountBalanceSelector,
  tetherSelector,
  everpaySelector,
  depositSelector,
} from "../store/selectors";
import { requestFunds } from "../store/interactions";
import everpayLogo from "../img/everpaylogonew.png";
import React from "react";
import { Button } from "react-bootstrap";

const Navbar = (props) => {
  return (
    <nav className="newNav navbar navbar-expand-lg navbar-dark shadow sticky-top">
      <a className="navbar-brand" href="/#">
        <img className="everpayLogo" src={everpayLogo} alt="" />
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"></li>
        <li className="nav-item">
          <p className="navAccount mr-4">
            Tether Balance:{" "}
            {props.everpayLoaded ? props.accountBalance : "loading..."}
          </p>
        </li>
        <li className="nav-item">
          <a
            className="nav-account"
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
    deposit: depositSelector(state),
    everpay: everpaySelector(state),
    tether: tetherSelector(state),
  };
}

export default connect(mapStateToProps)(Navbar);
