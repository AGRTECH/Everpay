import { connect } from "react-redux";
import { accountSelector } from "../store/selectors";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/#">
        Everpay
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            className="nav-link small"
            href={`https://etherscan.io/address/${props.account}`}
          >
            {props.account}
          </a>
        </li>
      </ul>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    account: accountSelector(state),
  };
}

export default connect(mapStateToProps)(Navbar);
