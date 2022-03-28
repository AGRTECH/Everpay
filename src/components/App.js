import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import StreamChart from "./StreamChart";
import { connect } from "react-redux";
import {
  loadAccount,
  loadWeb3,
  loadEverpay,
  loadTether,
  subscribeToEvents,
} from "../store/interactions";

const App = (props) => {
  const [mounted, setMounted] = useState(false);

  const loadBlockchainData = async (dispatch) => {
    const web3 = loadWeb3(dispatch);
    await web3.eth.net.getNetworkType();
    await loadAccount(web3, dispatch);
    const networkId = await web3.eth.net.getId();
    const everpay = await loadEverpay(web3, networkId, dispatch);
    const tether = await loadTether(web3, networkId, dispatch);
    if (!everpay && !tether) {
      window.alert(
        "Token smart contract not detcted on the current network. Please select another network with Metamask"
      );
    } else {
      // await loadAllData(voting, dispatch);
      await subscribeToEvents(everpay, dispatch);
    }
  };

  if (!mounted) {
    loadBlockchainData(props.dispatch);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <StreamChart />
    </>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
