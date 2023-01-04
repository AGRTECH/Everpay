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
import NetworkOverlay from "./NetworkOverlay";
import AccountOverlay from "./AccountOverlay";
import ethLogo from "../img/ethlogo.svg";
import { requestFunds } from "../store/interactions";
import everpayLogo from "../img/everpaylogonew.png";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Web3 from "web3";
import wallet from "../img/walleticon3.png";
import accountIcon from "../img/accounticon.png";

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
      <div className="nav-right">
        <div className="nav-wallet">
          <img src={wallet} style={{ width: "20px", height: "20px" }} alt="" />
        </div>
        <div className="nav-tether">
          <p className="navAccount mr-4">
            {props.everpayLoaded ? props.accountBalance : ""} USDT
          </p>
        </div>

        <img
          className="nav-img"
          src={ethLogo}
          style={{
            zIndex: "100",
            marginRight: "-32px",
            marginBottom: "0px",
            position: "relative",
          }}
          alt=""
        />
        <a className="no-underline">
          {window.ethereum.networkVersion === "5" && props.everpayLoaded ? (
            <>
              <a className="nav-account">Goerli </a>

              <NetworkOverlay />
            </>
          ) : (
            <a className="nav-account">Switch to Goerli</a>
          )}
        </a>
        <img
          className="nav-img-account"
          src={accountIcon}
          style={{
            padding: "5px",
            border: "3px solid black",
            borderRadius: "50%",
            zIndex: "100",
            marginRight: "-32px",
            marginBottom: "3px",
            position: "relative",
            backgroundColor: "#639a6c",
          }}
          alt=""
        />
        <div className="">
          <>
            <a
              className="nav-account"
              onClick={() => {
                connectToWallet();
              }}
            >
              {props.everpay
                ? `${props.account
                    .split("")
                    .splice(0, 2, "")
                    .join("")}...${props.account
                    .split("")
                    .splice(38, 4, "")
                    .join("")}`
                : window.ethereum.networkVersion !== "5" && account.length > 1
                ? "---"
                : "Connect Wallet"}
            </a>
            <AccountOverlay account={props.account} />
          </>
        </div>
      </div>
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
