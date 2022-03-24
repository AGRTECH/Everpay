export function web3Loaded(connection) {
  return {
    type: "WEB3_LOADED",
    connection,
  };
}

export function web3AccountLoaded(account) {
  return {
    type: "WEB3_ACCOUNT_LOADED",
    account,
  };
}

export function tetherLoaded(contract) {
  return {
    type: "TETHER_LOADED",
    contract,
  };
}

export function everpayLoaded(contract) {
  return {
    type: "EVERPAY_LOADED",
    contract,
  };
}
