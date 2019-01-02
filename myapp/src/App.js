import React, { Component } from "react";
import "./App.css";
import NewDataInsertSection from "./components/form.js";
import HousesDataTableSection from "./components/table";
import StatsChartSection from "./components/chart";
import sampleHouses from "./data/sampleDataSource";
import DataSelectSection from "./components/DataSelectSection";
// import Posts from "./components/posts";
import topPicture from "./images/toppicture.jpg";

class App extends Component {
  state = {
    newAddedDatas: {},
    housesSampleData: [],
    housesDatabaseData: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(housesData => this.setState({ housesData }));
  }

  addNewDataToDatabase = data => {
    console.log("check react console state");
    const newAddedDatas = { ...this.state.newAddedDatas };
    newAddedDatas[`newData${Date.now()}`] = data;
    this.setState({ newAddedDatas: newAddedDatas });
  };

  loadSampleData = () => {
    this.setState({ housesSampleData: sampleHouses });
    console.log("sampledata loaded");
  };

  removeSampleData = () => {
    this.setState({ housesSampleData: [] });
    console.log("sampledata removed");
  };

  loadDatabaseData = () => {
    console.log("database data loaded");
    console.log(this.state.housesData);
  };

  removeDatabaseData = () => {
    // this.setState({ housesData: [] });
    console.log("database data removed");
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
          <DataSelectSection
            loadSampleData={this.loadSampleData}
            removeSampleData={this.removeSampleData}
            loadDatabaseData={this.loadDatabaseData}
            removeDatabaseData={this.removeDatabaseData}
          />
        </section>
        <section className="section">
          <HousesDataTableSection housesSampleData={this.state.housesSampleData} />
        </section>
        <section className="section">{}</section>
        <section className="section">
          <StatsChartSection />
          
        </section>
      </div>
    );
  }
}

export default App;
