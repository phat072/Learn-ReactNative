const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectedDB } = require('./configs/database/database'); 
const noteRoutes = require('./router/route');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectedDB();
app.use(noteRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));