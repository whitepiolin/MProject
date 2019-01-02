import React from "react";

class SampleDataSection extends React.Component {
  render() {
    return (
      <div>
        <h2>Sample Data Upload Section</h2>

        <div className="input5678">
          <div className="input56">
            <p>If you want to use sample Data :</p>
            <button onClick={this.props.loadSampleData}> Use Sample! </button>
          </div>
          <div className="input56">
            <p>If you want to remove sample Data :</p>
            <button onClick={this.props.removeSampleData}>
              {" "}
              Remove Sample!{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SampleDataSection;
