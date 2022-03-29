import "./App.css";
import React, { useState } from "react";
import CreateStream from "./CreateStream";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { everpayLoadedSelector } from "../store/selectors";

const StreamChart = () => {
  const [series, setSeries] = useState([70]);
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
    <div id="chart">
      {1 === 2 ? (
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={350}
        />
      ) : (
        <CreateStream />
      )}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    everpayLoaded: everpayLoadedSelector(state),
  };
}

export default connect(mapStateToProps)(StreamChart);
