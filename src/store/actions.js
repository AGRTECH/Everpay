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

export function streamCreated(data) {
  return {
    type: "STREAM_CREATED",
    data,
  };
}

export function streamCreating() {
  return {
    type: "STREAM_CREATING",
  };
}

export function tokenChanged(contract) {
  return {
    type: "TOKEN_CHANGED",
    contract,
  };
}

export function streamAmountChanged(amount) {
  return {
    type: "STREAM_AMOUNT_CHANGED",
    amount,
  };
}

export function recipientAddressChanged(address) {
  return {
    type: "RECIPIENT_ADDRESS_CHANGED",
    address,
  };
}

export function endTimeChanged(time) {
  return {
    type: "END_TIME_CHANGED",
    time,
  };
}
