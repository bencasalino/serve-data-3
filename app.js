const express = require('express');

const cors = require('cors');



const app = express();

app.use(cors());


var students = [{
  id: 1,
  firstName: "Alice",
  lastName: "Zephyr",
  homeTown: "Seattle"
}, {
  id: 2,
  firstName: "Bob",
  lastName: "Yellow",
  homeTown: "Vancouver"
}, {
  id: 3,
  firstName: "Claire",
  lastName: "Xylitol",
  homeTown: "Toledo"
}, {
  id: 1,
  firstName: "Daniel",
  lastName: "Winston",
  homeTown: "Akron"
}, {
  id: 1,
  firstName: "Edina",
  lastName: "Veritas",
  homeTown: "Wichita"
}];


// return all
app.get('/', function (request, response) {
    response.json(students);
});

function findById(data, id){
    for (let i = 0; i < data.length; i++){
        if (data[i].id == id){
            return data[i];
        }
    }
    return null;
}

app.get("/:id", function (request, response) {
    var record = findById(students, request.params.id);
    if (!record){
        response.status = 404;
        response.json({
            error: {
            message: "No record found!"
            }
        });
    }

    response.json({students: record});
});

app.listen(process.env.PORT || 3000);
