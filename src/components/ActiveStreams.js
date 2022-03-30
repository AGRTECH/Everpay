import "./App.css";
import { connect } from "react-redux";
import {
  everpaySelector,
  accountSelector,
  everpayLoadedSelector,
  tetherSelector,
  receiverSelector,
  depositSelector,
  streamTokenSelector,
  endTimeSelector,
  tetherLoadedSelector,
  approvedSelector,
  allStreamsSelector,
  allStreamsLoadedSelector,
} from "../store/selectors";
import Streaming from "./Streaming";

const ActiveStreams = (props) => {
  const renderStream = (stream, props) => {
    const { dispatch, everpay, account } = props;
    if (account === stream._receiver && stream._isStreaming) {
      return (
        <div className="container-1 shadow" key={stream._streamId}>
          <h3>Your Incoming Stream</h3>
          <Streaming
            streamDeposit={parseInt(stream._deposit)}
            streamRatePerSecond={parseInt(stream._rate)}
            streamSender={stream._sender}
            streamReceiver={stream._receiver}
            currentAccount={account}
            streamReceiverBalance={stream._streamBalanceOf}
          />
        </div>
      );
    } else if (account === stream._sender && stream._isStreaming) {
      return (
        <div className="container-1 shadow">
          <h3>Your Created Stream</h3>
          <Streaming
            streamDeposit={parseInt(stream._deposit)}
            streamRatePerSecond={parseInt(stream._rate)}
            streamSender={stream._sender}
            streamReceiver={stream._receiver}
            currentAccount={account}
            streamReceiverBalance={stream._streamBalanceOf}
          />
        </div>
      );
    } else {
      return <></>;
    }
  };
  const showStreams = (props) => {
    const { allStreams, allStreamsLoaded } = props;

    return (
      <div>
        {allStreamsLoaded && allStreams.data.length > 0 ? (
          allStreams.data.map((stream) => renderStream(stream, props))
        ) : (
          <p className="container shadow">
            No outgoing or incoming streams on this account!
          </p>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="">
        {props.allStreamsLoaded ? (
          showStreams(props)
        ) : (
          <p className="container">
            No outgoing or incoming streams on this account!
          </p>
        )}
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    everpay: everpaySelector(state),
    tether: tetherSelector(state),
    account: accountSelector(state),
    everpayLoaded: everpayLoadedSelector(state),
    tetherLoaded: tetherLoadedSelector(state),
    receiver: receiverSelector(state),
    deposit: depositSelector(state),
    streamToken: streamTokenSelector(state),
    endTime: endTimeSelector(state),
    approved: approvedSelector(state),
    allStreams: allStreamsSelector(state),
    allStreamsLoaded: allStreamsLoadedSelector(state),
  };
}

export default connect(mapStateToProps)(ActiveStreams);
