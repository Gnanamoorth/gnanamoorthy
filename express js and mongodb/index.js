/* third party module */
const express = require('express')
const index = express()
const parser = require('body-parser')
const singnups = require('./auth')
/* local module */
const app = require('./app')
const connect = require('./db')

/* middelware */
index.use(parser.json())
index.use("/auth", singnups.routing)
index.use("/course1", app.apps)



connect.mongoose()
    .then(() => {
        index.listen(3011)
    }).catch((err) => {
        console.log("Not connected")
    })




