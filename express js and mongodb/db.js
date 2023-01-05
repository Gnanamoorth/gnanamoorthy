const { Schema, default: mongoose } = require("mongoose");
mongoose.set('strictQuery', false);


async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/vengatesan');
}

const courses = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

const movies_list = new Schema({
    movieName: {
        type: String,
        required: true
    },
    actour: {
        type: String,
        required: true
    },
    villan: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Number,
        min: 2000,
        max: 2022,
        required: true

    }
})

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
module.exports.Schema = mongoose.model('userdetails', user);
module.exports.Schema2 = mongoose.model('movies_lists', movies_list);



//module.exports.mod=mongoose.model('Avengers',courses,'movies');

module.exports.mongoose = connectDB

/*  const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const dbName = "gnanamoorthy";

async function connect() {
    await client.connect();
    const db = await client.db(dbName)
    return db
}

module.exports = connect;

 */
