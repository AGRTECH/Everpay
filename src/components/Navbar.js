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
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Web3 from "web3";
import wallet from "../img/walleticon3.png";

const Navbar = (props) => {
  const [account, setAccount] = useState([]);

  const connectToWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      window.web3 = new Web3(window.ethereum);
    } else {
      console.log("No wallet");
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
  };

  const checkWalletConnect = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    setAccount(account);
  };

  useEffect(() => {
    checkWalletConnect();
  }, []);

  console.log(account);

  return (
    <nav className="newNav navbar-dark shadow sticky-top">
      <a className="navbar-brand" href="/#">
        <img className="everpayLogo" src={everpayLogo} alt="" />
      </a>
      <ul className="nav-right">
        <li className="nav-wallet">
          <img src={wallet} style={{ width: "20px", height: "20px" }} alt="" />
        </li>
        <li className="nav-tether">
          <p className="navAccount mr-4">
            {props.everpayLoaded ? props.accountBalance : ""} USDT
          </p>
        </li>
        <li className="">
          <a
            className="nav-account"
            onClick={() => {
              connectToWallet();
            }}
          >
            {props.everpay
              ? `Account: ${props.account
                  .split("")
                  .splice(0, 5, "")
                  .join("")}...${props.account
                  .split("")
                  .splice(38, 4, "")
                  .join("")}`
              : window.ethereum.networkVersion !== 5 && account.length > 1
              ? "Please Switch to Goerli"
              : "Connect Wallet"}
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
