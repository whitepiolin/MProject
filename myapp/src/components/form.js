import React from "react";

class NewDataInsertSection extends React.Component {
  urlRef = React.createRef();
  dateRef = React.createRef();
  typeRef = React.createRef();

  handleClick = event => {
    event.preventDefault();

    const newData = {
      addedData: this.dateRef.current.value,
      addedDataType: this.typeRef.current.value,
      additionDate: this.dateRef.current.value
    };

    console.log(newData);
    this.props.addNewDataToDatabase(newData);
    // alert("Your URL captured!");
    event.currentTarget.reset();
  };
  render() {
    return (
      <div>
        <h2>Database Update Section</h2>
        <form className="newDataInsertSection" onSubmit={this.handleClick}>
          <div className="input1234">
            <textarea
              class="input1"
              name="addedData"
              type="text"
              ref={this.urlRef}
              // required
              placeholder="Enter the URL or JSON here"
            />
            <div className="input23">
              <input
                class="input2"
                name="date"
                type="text"
                ref={this.dateRef}
                // required
                placeholder="Enter the Date here"
              />
              <select class="input3" name="type" ref={this.typeRef}>
                <option disabled selected>
                  Select the type of data
                </option>
                <option value="JSON">JSON</option>
                <option value="URL">URL</option>
              </select>
            </div>
            <div className="input4">
              <button class="input4" type="submit">
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
