import React from "react";

class NewDataInsertSection extends React.Component {
  dataRef = React.createRef();
  dateRef = React.createRef();
  typeRef = React.createRef();

  handleClick = event => {
    event.preventDefault();

    // const newData = {
    //   addedData: this.urlRef.current.value,
    //   addedDataType: this.typeRef.current.value,
    //   additionDate: this.dateRef.current.value
    // };

    const newData = this.dataRef.current.value;
    //newData validation control/ else error

    this.props.addNewDataToDatabase(newData);
    event.currentTarget.reset();
  };

  sampleJsonAlert = () => {
    const jsonFileFormat = [
      {
        addition_date: "",
        link: "",
        location_country: "",
        location_city: "",
        location_address: "",
        location_coordinates_lat: "",
        location_coordinates_lng: "",
        size_parcelm2: "",
        size_grossm2: "",
        size_netm2: "",
        size_rooms: "",
        price_value: "",
        price_currency: "",
        description: "",
        title: "",
        images: "",
        market_date: "",
        sold: 0
      }
    ];
    alert(JSON.stringify(jsonFileFormat, undefined, 2));
  };

  render() {
    return (
      <div>
        <h2>Database Update Section</h2>
        <div className="input4">
          <button className="input4" onClick={this.sampleJsonAlert}>
            See Sample Input->
          </button>
        </div>
        <form className="newDataInsertSection" onSubmit={this.handleClick}>
          <div className="input1234">
            <textarea
              className="input1"
              name="addedData"
              type="text"
              ref={this.dataRef}
              // required
              placeholder="Enter your JSON here :  "
            />
            <div className="input23">
              <input
                className="input2"
                name="date"
                type="text"
                ref={this.dateRef}
                // required
                placeholder="Enter the Date here"
              />
              <select className="input3" name="type" ref={this.typeRef}>
                {/* <option disabled selected>
                  Select the type of data
                </option> */}
                <option value="JSON">JSON</option>
                <option value="URL">URL</option>
              </select>
              <button className="input4" type="submit">
                Update Database ->
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewDataInsertSection;
