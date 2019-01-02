import React, { Component } from "react";
import "./App.css";
import NewDataInsertSection from "./components/form.js";
import HousesDataTableSection from "./components/table";
import StatsChartSection from "./components/chart";
import sampleHouses from "./data/sampleDataSource";
import SampleDataSection from "./components/sampleData";
import topPicture from "./images/toppicture.jpg";
// import HousesDataTableDynamicSection from "./components/tabledynamic";

class App extends Component {
  state = {
    newAddedDatas: {},
    housesData: []
  };

  addNewDataToDatabase = data => {
    console.log("check react console state");
    const newAddedDatas = { ...this.state.newAddedDatas };
    newAddedDatas[`newData${Date.now()}`] = data;
    this.setState({ newAddedDatas: newAddedDatas });
  };

  loadSampleData = () => {
    this.setState({ housesData: sampleHouses });
    console.log("check react console state");
  };

  removeSampleData = () => {
    this.setState({ housesData: [] });
    console.log("check react console state");
  };

  render() {
    return (
      <div className="App">
        <img className="topPicture" src={topPicture} alt="estatepicture" />
        <section className="section">
          <NewDataInsertSection
            addNewDataToDatabase={this.addNewDataToDatabase}
          />
        </section>
        <section className="section">
          <SampleDataSection
            loadSampleData={this.loadSampleData}
            removeSampleData={this.removeSampleData}
          />
        </section>
        <section className="section">
          <HousesDataTableSection housesData={this.state.housesData} />
        </section>
        <section className="section">
          <StatsChartSection />
          {/* <HousesDataTableDynamicSection/> */}
        </section>
      </div>
    );
  }
}

export default App;
