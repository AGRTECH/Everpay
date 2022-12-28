import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LeavesBlowingInTheWind from "./LeavesBlowingInTheWind";
import StreamChart from "./StreamChart";
import { connect } from "react-redux";
import {
  loadAccount,
  loadWeb3,
  loadEverpay,
  loadTether,
  subscribeToEvents,
  loadAllData,
  showBalances,
} from "../store/interactions";
import CreateStream from "./CreateStream";
import ActiveStreams from "./ActiveStreams";
import ParticlesBg from "particles-bg";
import { Modal, Button } from "react-bootstrap";
// import leaves from "../img/leavestransparent.png";

const App = (props) => {
  // "node": "8.11.1"
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loadBlockchainData = async (dispatch) => {
    const web3 = loadWeb3(dispatch);
    await web3.eth.net.getNetworkType();
    const account = await loadAccount(web3, dispatch);
    const networkId = await web3.eth.net.getId();
    const everpay = await loadEverpay(web3, networkId, dispatch);
    const tether = await loadTether(web3, networkId, dispatch);
    if (!everpay && !tether) {
      // window.alert(
      //   "Token smart contract not detcted on the current network. Please select test with Metamask"
      // );

      setShow(true);
    } else {
      await loadAllData(everpay, dispatch);
      await subscribeToEvents(everpay, dispatch);
      await showBalances(dispatch, account, tether, everpay);
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
      {/* <img className="leaves-img" src={leaves} alt="" /> */}
      <Navbar />
      <ActiveStreams />
      <CreateStream />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-title">
          <Modal.Title className="modal-title">
            Wrong network detected
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please switch to the goerli network on your metamask wallet
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
