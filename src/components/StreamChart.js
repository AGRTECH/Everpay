import "./App.css";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  loadAccount,
  loadWeb3,
  loadEverpay,
  loadTether,
} from "../store/interactions";

class StreamChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70],
      options: {
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
        labels: ["Cricket"],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={350}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(StreamChart);
