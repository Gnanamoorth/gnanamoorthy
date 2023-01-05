const express = require('express');
const authRouter = express.Router();
const authcontroller = require('./authcontroler')

authRouter.route('/singup')
    .get(authcontroller.getdata)
    .post(authcontroller.singnup)


authRouter.post('/login', authcontroller.login)

module.exports.routing = authRouter