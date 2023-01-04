import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Question from "../img/darkerqmark.png";
import "./App.css";

function QuestionOverlay() {
  const renderTooltip = (props) => (
    <Tooltip {...props}>
      If you have not requested funds yet, you will have to, to be able to test
      out streaming on Goerli. Clicking this Button will send you 100 Test
      Tether to be able to stream to another account.
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 50, hide: 50 }}
      overlay={renderTooltip}
    >
      <img
        className="question-img"
        src={Question}
        style={{
          width: "27px",
          height: "23px",
          marginBottom: "20px",
          position: "relative",
        }}
        alt=""
      />
    </OverlayTrigger>
  );
}

export default QuestionOverlay;
