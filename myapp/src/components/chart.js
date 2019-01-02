import React from "react";
// import Chart from "chart.js";

class StatsChartSection extends React.Component {
  render() {
    return (
      <div className="statsChartSection">
        <h2>Stats Chart Section</h2>
        <canvas id="myChart" />
      </div>
    );
  }
}

export default StatsChartSection;
