const express = require('express');
const app = express();
//post 받아오기 위해 body-parser 사용
app.use(express.urlencoded({ extended: false }))

//react ajax 통신
app.use(express.json());
const cors = require('cors');
app.use(cors());

const path = require('path');
require('dotenv').config();

//swagger
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// DB connection
const id = process.env.DBid
const pwd = process.env.DBpwd

const mongoose = require("mongoose");
mongoose.connect(`mongodb://${id}:${pwd}@13.209.66.117:27017/admin`, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.error("mongoDB Connection Error!", err);
    }
    console.log("mongoDB Connected!");

    // Server Open
    app.listen(8080, function () {
        console.log("Server listening on port 8080!");
    });
});

//router 사용
const studyRouter = require("./routes/study");
app.use('/study', studyRouter);