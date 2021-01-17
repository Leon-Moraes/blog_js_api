const cors = require('cors');
const express = require('express');
const app = express();
const db = require('./connection');
const router = require('./router');
const bodyParser = require('body-parser')

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "hbs");

app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

