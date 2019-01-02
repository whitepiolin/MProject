import React from "react";

class HousesDataTableSection extends React.Component {
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
              <tbody>
                {this.props.housesSampleData.map((x, i) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default HousesDataTableSection;
