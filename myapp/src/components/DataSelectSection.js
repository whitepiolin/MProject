import React from "react";

class DataSelectSection extends React.Component {
  render() {
    return (
      <div>
        <h2>Data Upload Section</h2>

        <div className="input5678">
          <div className="input78">
            <div className="input56">
              <p>Use sample Data: </p>
              <button
                className="clickButton"
                onClick={this.props.loadSampleData}
              >
                {" "}
                Click!
              </button>
            </div>
            <div className="input56">
              <p>Remove sample Data: </p>
              <button
                className="clickButton"
                onClick={this.props.removeSampleData}
              >
                Click!
              </button>
            </div>
          </div>
          <div className="input78">
            <div className="input56">
              <p>Use MySql Database: </p>
              <button
                className="clickButton"
                onClick={this.props.loadDatabaseData}
              >
                Click!
              </button>
            </div>
            <div className="input56">
              <p>Remove MySql Database: </p>
              <button
                className="clickButton"
                onClick={this.props.removeDatabaseData}
              >
                Click!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DataSelectSection;
