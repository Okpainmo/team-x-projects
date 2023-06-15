// dotenv import
const dotenv = require("dotenv")

// initialize dotenv
dotenv.config()

// express import and init
const express = require("express");
const app = express();

// CORS import 
const cors = require('cors')


// CORS init
app.use(cors());

// db-connector import
// const dbConnector = require("./db/connect-db")

// express middleware for handling json data in post-requests
app.use(express.json());

// test endpoint
app.get(
    '/api/krypta-v1', (req, res) => {
        res.status(200).send({
            users: [
                { name: "Andrew", age: 25},
                { name: "Sam", age: 28}
            ]
        })
    }
)

// serve
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // await dbConnector(process.env.MONGO_DB_CONNECTION_STRING);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();// express middleware for handling json data in post-requests
app.use(express.json());







