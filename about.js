const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://project1:project1@project10.jugyf5n.mongodb.net/Data', {
useUnifiedTopology : true,
useNewUrlParser: true, 
}).then(console.log('Connected to mongo db!'))