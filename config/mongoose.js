const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Lovepreet:<password>@cluster0.fnl8y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    // console.log('Connected to Database :: MongoDB');
});


module.exports = db;