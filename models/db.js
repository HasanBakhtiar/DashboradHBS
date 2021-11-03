const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',  (err) => {
    if(!err) {console.log("MongoDB Connecttion Succeeded")}
    else{console.log("error in DB connection:"+err);}
});
require('./employee.model')