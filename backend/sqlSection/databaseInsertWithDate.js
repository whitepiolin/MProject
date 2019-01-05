const mysql = require("mysql");
const houseDetails = require("./data/results_20190104.json");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "realestatemarket2",
  port: 3306
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

houseDetails.forEach(houseDetail => {
  const {
    location,
    size,
    price,
    description,
    title,
    images,
    market_date,
    sold
  } = houseDetail;
  const arrForDatabase = [];
  arrForDatabase.push("2019-01-04")
  const link = houseDetail.url;
  arrForDatabase.push(link);
  arrForDatabase.push(location.country);
  arrForDatabase.push(location.city);
  arrForDatabase.push(location.address);
  arrForDatabase.push(location.coordinates.lat);
  arrForDatabase.push(location.coordinates.lng);
  arrForDatabase.push(size.parcel_m2);
  arrForDatabase.push(size.gross_m2);
  arrForDatabase.push(size.net_m2);
  arrForDatabase.push(size.rooms);
  arrForDatabase.push(price.value);
  arrForDatabase.push(price.currency);
  arrForDatabase.push(description);
  arrForDatabase.push(title);
  arrForDatabase.push(images.join());
  arrForDatabase.push(market_date);
  arrForDatabase.push(sold);

  const databaseQuerry =
    "INSERT INTO housesForSale (addition_date, link, location_country, location_city, location_address, location_coordinates_lat, location_coordinates_lng, size_parcelm2, size_grossm2, size_netm2, size_rooms, price_value, price_currency, description, title, images, market_date, sold) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  connection.query(databaseQuerry, [...arrForDatabase], function(
    error,
    result
  ) {
    if (error) throw error;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

connection.end();
