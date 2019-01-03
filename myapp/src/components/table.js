import React from "react";

class HousesDataTableSection extends React.Component {
  renderSampleData() {
    
    const sampleSection = this.props.housesSampleData.map((x, i) => (
      <tr className="dynamicHouses" key={i}>
        <td>{x.location.country}</td>
        <td>{x.location.city}</td>
        <td>{x.location.address}</td>
        <td>{x.size.parcel_m2}</td>
        <td>{x.size.gross_m2}</td>
        <td>{x.size.net_m2}</td>
        <td>{x.size.rooms}</td>
        <td>{x.price.value}</td>
        <td>{x.price.currency}</td>
        <td>{x.market_date}</td>
        <td>
          <a href="{x.url}">{x.url}</a>
        </td>
      </tr>
    ));
    
    return sampleSection;
  }

  renderDatabaseData() {

    const databaseSection = this.props.housesDatabaseData.map((x, i) => (
      <tr className="dynamicHouses" key={i}>
        <td>{x.location_country}</td>
        <td>{x.location_city}</td>
        <td>{x.location_address}</td>
        <td>{x.size_parcelm2}</td>
        <td>{x.size_grossm2}</td>
        <td>{x.size_netm2}</td>
        <td>{x.size_rooms}</td>
        <td>{x.price_value}</td>
        <td>{x.price_currency}</td>
        <td>{x.market_date}</td>
        <td>
          <a href="{x.link}">{x.link}</a>
        </td>
      </tr>
    ));
        
    return databaseSection;
  }

  render() {
    return (
      <div className="HousesDataTableSection">
        <h2>Houses Data Section</h2>
        <div id="table-wrapper">
          <div id="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Size (Parcel Area)</th>
                  <th>Size (Gross Area)</th>
                  <th>Size (Net Area)</th>
                  <th>Rooms</th>
                  <th>Price</th>
                  <th>Currency</th>
                  <th>Market Date</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>{this.renderSampleData()}</tbody>
              <tbody>{this.renderDatabaseData()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default HousesDataTableSection;
