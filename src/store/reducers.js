import { combineReducers } from "redux";

function web3(state = {}, action) {
  switch (action.type) {
    case "WEB3_LOADED":
      return { ...state, connection: action.connection };
    case "WEB3_ACCOUNT_LOADED":
      return { ...state, account: action.account };
    default:
      return state;
  }
}

function tether(state = {}, action) {
  switch (action.type) {
    case "TETHER_LOADED":
      return { ...state, loaded: true, contract: action.contract };
    default:
      return state;
  }
}
function everpay(state = {}, action) {
  let data;
  switch (action.type) {
    case "EVERPAY_LOADED":
      return { ...state, loaded: true, contract: action.contract };
    case "STREAM_CREATING":
      return { ...state, streamCreated: false };
    case "STREAM_CREATED":
      if (state.streamCreatedData) {
        data = [...state.streamCreatedData.data, action.streamData];
        console.log("top", data.length);
      } else {
        data = [action.streamData];
        console.log("bot", data.length);
      }

      return {
        ...state,
        streamCreated: true,

        streamCreatedData: {
          ...state.streamCreatedData,
          data,
        },
      };
    case "TOKEN_CHANGED":
      return { ...state, streamTokenContract: action.contract };
    case "STREAM_AMOUNT_CHANGED":
      return { ...state, streamDepositAmount: action.amount };
    case "RECIPIENT_ADDRESS_CHANGED":
      return { ...state, streamRecipientAddress: action.address };
    case "END_TIME_CHANGED":
      return { ...state, streamEndTime: action.time };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  web3,
  tether,
  everpay,
});

export default rootReducer;
