const express = require('express');
const app = express.Router();
const connect = require("./db");
const mongodb = require('mongodb');
const path = require('path');
const test = require('./midelware')



app.use(test.test).
    route("/")
    .get(async function (req, res) {
        const books = await connect.Schema2.find()
        //const db=await connect();
        //const books=await db.collection("personal_files").find().toArray()
        res.status(200).json(books)
    })
    .post(async function (req, res) {
        try {
            const users = await connect.Schema2.create(req.body)
            await res.send(users)
        }
        catch (errors) {
            res.status(400).send("your missed the term is :" + errors)
        }
        //const db=await connect();
        //await db.collection("datasciences").insertOne(req.body)

    })

app.
    route("/:id")
    .get(async function (req, res) {
        const id = req.params.id;
        books = await connect.Schema2.find({ _id: mongodb.ObjectId(id) })
        //const db=await connect();
        //const book= await db.collection("personal_files").find({_id:mongodb.ObjectId(id)}).toArray()
        res.status(200).json(books)
    })
    .patch(async function (req, res) {
        const id = req.params.id;
        await connect.Schema2.updateOne({ _id: mongodb.ObjectId(id) }, { $set: req.body })
        res.status(202).send("Your details is updated")
    })
    .delete(async function (req, res) {
        const id = req.params.id;
        books = await connect.Schema2.deleteOne({ _id: mongodb.ObjectId(id) })
        res.status(204).send("your data is deleted")
    })

module.exports.apps = app

