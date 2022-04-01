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

export function streamCreated(streamData) {
  return {
    type: "STREAM_CREATED",
    streamData,
  };
}

export function withdrawCreated(withdrawData) {
  return {
    type: "WITHDRAW_CREATED",
    withdrawData,
  };
}

export function cancelCreated(cancelData) {
  return {
    type: "CANCEL_CREATED",
    cancelData,
  };
}

export function streamCreating() {
  return {
    type: "STREAM_CREATING",
  };
}

export function withdrawCreating() {
  return {
    type: "WITHDRAW_CREATING",
  };
}

export function cancelCreating() {
  return {
    type: "CANCEL_CREATING",
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

export function approved() {
  return {
    type: "APPROVED",
  };
}

export function allStreamsLoaded(streams) {
  return {
    type: "ALL_STREAMS_LOADED",
    streams,
  };
}

export function allWithdrawlsLoaded(withdrawls) {
  return {
    type: "ALL_WITHDRAWLS_LOADED",
    withdrawls,
  };
}

export function allCancelsLoaded(cancels) {
  return {
    type: "ALL_CANCELS_LOADED",
    cancels,
  };
}

export function streamingStatusChanged(status) {
  return {
    type: "STREAMING_STATUS_CHANGED",
    status,
  };
}

export function accountBalanceChanged(balance) {
  return {
    type: "ACCOUNT_BALANCE_CHANGED",
    balance,
  };
}
