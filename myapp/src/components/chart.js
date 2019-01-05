import React from "react";

// import AAA from "./aaa";
// import Date from "datejs";

var Chart = require("chart.js");

class StatsChartSection extends React.Component {
  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  averagePerM2PerHouse(date, database) {
    let total = 0;
    database.forEach(x => {
      if (date === x.AdditionDate && typeof x.AveragePerM2 !== "NaN") {
        total = total + x.AveragePerM2;
      } else {
        console.log("wrong");
      }
    });
    const eee = database.filter(i => i.AdditionDate === date);
    console.log(eee.length);
    console.log(total);
    return total / eee.length;
  }

  componentWillUpdate(nextProps) {
    // console.log(nextProps.housesData);
    const { housesData } = nextProps;
    console.log(housesData);

    const housesStatsObject = [];

    housesData.map(x => {
      const src = {
        AdditionDate: this.formatDate(x.addition_date),
        City: x.location_city,
        Value: Number(x.price_value.substr(2, x.price_value.length - 9)) * 1000,
        Area: Number(x.size_netm2.substr(0, 3)),
        AveragePerM2: Number(
          (Number(x.price_value.substr(2, x.price_value.length - 9)) * 1000) /
            Number(x.size_netm2.substr(0, 3))
        )
      };

      housesStatsObject.push(src);
      return housesStatsObject;
    });

    console.log(housesStatsObject);

    const statsChart = this.statsChart;
    var dynamicData = [
      this.averagePerM2PerHouse("2018-12-28", housesStatsObject),
      this.averagePerM2PerHouse("2018-12-29", housesStatsObject),
      this.averagePerM2PerHouse("2018-12-30", housesStatsObject),
      this.averagePerM2PerHouse("2019-01-01", housesStatsObject),
      this.averagePerM2PerHouse("2019-01-02", housesStatsObject),
      this.averagePerM2PerHouse("2019-01-03", housesStatsObject),
      this.averagePerM2PerHouse("2019-01-04", housesStatsObject)
    ];
    var myChart = new Chart(statsChart, {
      type: "line",
      data: {
        labels: [
          "27-12-2018",
          "28-12-2018",
          "29-12-2018",
          "30-12-2018",
          "01-01-2019",
          "02-01-2019",
          "03-01-2019"
        ],
        datasets: [
          {
            label: "Average Price of m2",
            data: [
              dynamicData[0],
              dynamicData[1],
              dynamicData[2],
              dynamicData[3],
              dynamicData[4],
              dynamicData[5],
              dynamicData[6]
            ],
            backgroundColor: ["rgba(255, 159, 64, 1)"],
            borderColor: ["rgba(54, 162, 235, 1)"]
          }
        ]
      }
    });
  }
  style = { height: "40vh", width: "80vw", backgroundColor: "black" };

  render() {
    return (
      <div className="statsChartSection">
        
        <h2>Stats Chart Section</h2>
        <div id="table-wrapper2">
          <canvas
            id="myChart"
            style={{ width: 300, height: 100 }}
            ref={statsChart => (this.statsChart = statsChart)}
          />
        </div>
      </div>
    );
  }
}

export default StatsChartSection;
