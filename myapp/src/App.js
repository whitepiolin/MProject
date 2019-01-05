import React, { Component } from "react";
import "./App.css";
import NewDataInsertSection from "./components/form.js";
import HousesDataTableSection from "./components/table";
import StatsChartSection from "./components/chart";
import sampleHouses from "./data/sampleDataSource";
import DataSelectSection from "./components/DataSelectSection";
import topPicture from "./images/toppicture.jpg";

class App extends Component {
  state = {
    newAddedDatas: {},
    housesData: [],
    housesSampleData: [],
    housesDatabaseData: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(housesData => this.setState({ housesData }));
  }

  // addNewDataToDatabase = data => {
  //   console.log("check react console state");
  //   const newAddedDatas = { ...this.state.newAddedDatas };
  //   newAddedDatas[`newData${Date.now()}`] = data;
  //   this.setState({ newAddedDatas: newAddedDatas });
  // };

  addNewDataToDatabase = newData => {
    fetch("http://localhost:3000/newDataInsertion", {
      method: "POST",
      body: newData,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(console.log("addNewDataToDatabase worked"))
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
    this.setState({ housesDatabaseData: this.state.housesData });
    console.log("database data loaded");
  };

  removeDatabaseData = () => {
    this.setState({ housesDatabaseData: [] });
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
          <HousesDataTableSection
            housesSampleData={this.state.housesSampleData}
            housesDatabaseData={this.state.housesDatabaseData}
          />
        </section>
        <section className="section">{}</section>
        <section className="section">
          <StatsChartSection
            housesDatabaseData={this.state.housesDatabaseData}
            housesData={this.state.housesData}
          />
        </section>
      </div>
    );
  }
}

export default App;
