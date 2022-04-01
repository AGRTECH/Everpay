import "./App.css";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { everpayLoadedSelector } from "../store/selectors";

const StreamChart = (props) => {
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: ["Tether"],
  });

  return (
    <div id="chart" className="">
      <ReactApexChart
        options={options}
        series={[Math.ceil(props.balance)]}
        type="radialBar"
        height={350}
      />
    </div>
  );
};
function mapStateToProps(state) {
  return {
    everpayLoaded: everpayLoadedSelector(state),
  };
}

export default connect(mapStateToProps)(StreamChart);
