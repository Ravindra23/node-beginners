const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// connect to db

// mongoose.connect("db_URI")
mongoose.connect("mongodb://localhost/morn-batch", { useNewUrlParser: true })
    .then(res => console.log("database connected"))
    .catch(err => console.log(err));


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    mobile: String,
    address: String
});

const Users = mongoose.model('users', userSchema);

const kaveri = new Users({
    name: "Kaveri",
    email: "kaveri@gmail.com",
    password: "123456",
    mobile: "7905528068",
    address: "Chennai"

});

// kaveri.save()
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

//  to find all documents in a collection
// Users.find({})
//     .then(data=> console.log(data))
//     .catch(err=>console.log(err));


//  to search with a id
// Users.findById({ _id: "5d2ab016e931123b08db03e1" })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Users.findOne({})
//     .then(data => console.log(data))
//     .catch(err => console.log(err));



const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// routing
app.get('/', (req, res) => {
    res.send("this is our home page")
})


app.get('/about', (req, res) => {
    res.send("this is our about page")
})

app.get('/contact', (req, res) => {
    res.send("this is our contact page")
})

/*
    @route: '/profile/123/vishnu'
    @desc: it wil do something
    @access: private/public
*/
app.get('/profile/:id/:name', (req, res) => {
    const profile = {
        id: req.params.id,
        name: req.params.name
    }
    res.json(profile);
    // res.send(`you requested for the view of id: ${req.params.id} and name: ${req.params.name}`);
})


app.post('/login', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    res.json({ msg: "this is login page" });
})


app.post('/register', (req, res) => {

    console.log(req.body);
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
        address: req.body.address
    }

    res.json(user);
})

app.listen("7000");