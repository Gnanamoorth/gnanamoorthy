const user = require('./db')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;




exports.getdata = async function (req, res) {
    const userDetails = await user.Schema.find()
    res.json(userDetails)
}

exports.singnup = async function (req, res) {
    const password = await bcrypt.hash(req.body.password, saltRounds)
    const data = { ...req.body, password }
    const users = await user.Schema.create(data)
    await res.send(users)
}

exports.login = async function (req, res) {
    const users = await user.Schema.findOne({ email: req.body.email })
    if (!users) {
        res.send("user not found")
    }
    if (!(await bcrypt.compare(req.body.password, users.password))) {
        res.send("user not defined")
    }
    const token = jwt.sign(users.toJSON(), "verify-passwords")
    res.json({ users, token })
} 
