const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();
const port = 3000;

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

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json()); 
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/posts", function(req, res) {
  const sql = "select * from housesforsale ";

  connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.post("/newDataInsertion", function(req, res) {
  console.log(typeof req.body);
  req.body.forEach(houseDetail => {
    const {
      addition_date,
      link,
      location_country,
      location_city,
      location_address,
      location_coordinates_lat,
      location_coordinates_lng,
      size_parcelm2,
      size_grossm2,
      size_netm2,
      size_rooms,
      price_value,
      price_currency,
      description,
      title,
      images,
      market_date,
      sold
    } = houseDetail;

    const arrForDatabase = [];

    arrForDatabase.push(addition_date);
    arrForDatabase.push(link);
    arrForDatabase.push(location_country);
    arrForDatabase.push(location_city);
    arrForDatabase.push(location_address);
    arrForDatabase.push(location_coordinates_lat);
    arrForDatabase.push(location_coordinates_lng);
    arrForDatabase.push(size_parcelm2);
    arrForDatabase.push(size_grossm2);
    arrForDatabase.push(size_netm2);
    arrForDatabase.push(size_rooms);
    arrForDatabase.push(price_value);
    arrForDatabase.push(price_currency);
    arrForDatabase.push(description);
    arrForDatabase.push(title);
    arrForDatabase.push(images);
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
});

app.listen(port, () => {
  console.log(`Go to http://localhost:${port}`);
});
