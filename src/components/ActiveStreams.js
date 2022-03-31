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
  allWithdrawlsLoadedSelector,
  allWithdrawlsSelector,
  allCancelsSelector,
  allCancelsLoadedSelector,
} from "../store/selectors";
import Streaming from "./Streaming";

const ActiveStreams = (props) => {
  const renderStream = (stream, props) => {
    const {
      dispatch,
      everpay,
      account,
      allWithdrawls,
      allWithdrawlsLoaded,
      allStreamsLoaded,
    } = props;
    let formattedWithdrawls;
    if (
      allWithdrawlsLoaded &&
      stream._isStreaming &&
      allWithdrawls.data.length > 0
    ) {
      formattedWithdrawls = allWithdrawls.data.map((withdrawl) => withdrawl);
    }
    if (
      account === stream._receiver &&
      stream._isStreaming &&
      allWithdrawlsLoaded &&
      allStreamsLoaded
    ) {
      return (
        <div className="container-1 shadow" key={stream._streamId}>
          <h3>Your Incoming Stream</h3>
          <Streaming
            streamDeposit={parseInt(stream._deposit)}
            streamRatePerSecond={parseInt(stream._rate)}
            streamSender={stream._sender}
            streamReceiver={stream._receiver}
            currentAccount={account}
            streamReceiverBalance={
              allWithdrawls.data.length > 0
                ? parseInt(
                    formattedWithdrawls[formattedWithdrawls.length - 1][3]
                  )
                : 0
            }
          />
        </div>
      );
    } else if (
      account === stream._sender &&
      stream._isStreaming &&
      allWithdrawlsLoaded &&
      allStreamsLoaded
    ) {
      return (
        <div className="container-1 shadow">
          <h3>Your Created Stream</h3>
          <Streaming
            streamDeposit={parseInt(stream._deposit)}
            streamRatePerSecond={parseInt(stream._rate)}
            streamSender={stream._sender}
            streamReceiver={stream._receiver}
            currentAccount={account}
            streamReceiverBalance={
              allWithdrawls.data.length > 0
                ? parseInt(
                    formattedWithdrawls[formattedWithdrawls.length - 1][3]
                  )
                : 0
            }
          />
        </div>
      );
    } else {
      return <></>;
    }
  };
  const showStreams = (props) => {
    const { allStreams, allStreamsLoaded, allWithdrawls, allWithdrawlsLoaded } =
      props;

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
    allWithdrawlsLoaded: allWithdrawlsLoadedSelector(state),
    allWithdrawls: allWithdrawlsSelector(state),
    allCancels: allCancelsSelector(state),
    allCancelsLoaded: allCancelsLoadedSelector(state),
  };
}

export default connect(mapStateToProps)(ActiveStreams);
