/** @format */

const nodemailer = require('nodemailer')
require('dotenv').config()

// create transporter object which contains email host configuration
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_HOST_PORT,
    auth: {
        user: APP_EMAIL,
        pass: APP_EMAIL_PASSWORD,
    },
})
