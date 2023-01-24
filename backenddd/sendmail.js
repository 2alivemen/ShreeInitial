const nodemailer = require("nodemailer");
const express = require('express')

const router = express.Router();

router.post('/', async (req,res) => {

 const { emailU , mobileU} = req.body


const msg = {


    from: "shreeshhegde007@gmail.com",
    to: "shreeshhegde07@gmail.com",
    subject: "Ho",
    text: `Ho Dosta Received from ${emailU} and mobile Number ${mobileU}`

};
nodemailer.createTransport(
    {
        service:'gmail',
        auth: {
            user:"shreeshhegde007@gmail.com",
            pass:"jnlspqqmoidshroc"
        },
        port:465,
        host:'smtp.gmail.com'
    }
)
.sendMail(msg , (err) => {
    if(err){
        return console.log("Error",err);
        

    }
    else{
        res.send("ok")
        return console.log("Email Sent");

    }
})
})

module.exports = router;