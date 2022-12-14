import "./App.css";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { everpayLoadedSelector } from "../store/selectors";
import carbonfib from "../img/carbonfib.jpg";

const StreamChart = (props) => {
  const [options, setOptions] = useState({
    chart: {
      height: "auto",
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    colors: ["#000000"],
    labels: ["Tether"],
    responsive: [
      {
        breakpoint: 1000,
        options: {},
      },
    ],
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
