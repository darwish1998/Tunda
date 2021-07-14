const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



// const Cat = mongoose.model('Cat', {
//   name: String
// });
//
// const kitty = new Cat({
//   name: 'Zildjian'
// });
// kitty.save().then(() =>

console.log('Hello Darwish');

// creating new  schema

const fruitSchema = new mongoose.Schema({

  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const liin = new Fruit({

  name: "Liin balbeemo",
  rating: 4,
  review: "Mid aad iyo macaan iyo nafaqo"

});

const avacado = new Fruit({

  name: "avacado",
  rating: 3,
  review: "Fatty one "

});
const banana = new Fruit({

  name: "banana",
  rating: 10,
  review: "la dhaafi karo moos"

});
const tufax = new Fruit({

  name: "tufax",
  rating: 2,
  review: "Qaali lkn waa macaan"

});

// Fruit.insertMany([avacado, banana, tufax], function(err) {
//   if (err) {
//     console.log(err);
//
//   } else {
//     console.log("Successfully connected to Fruits DataBase");
//   }
// })
//fruit.save();

// finding collections

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);

  }else
  {
    mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }

});

//challenge
// const PeopleSchema = new mongoose.Schema({
//
//   name: String,
//   age: Number
//
// });
//
// const Person = mongoose.model("Person", PeopleSchema);
//
// const person = new Person({
//
//   name: "Ali",
//   age: 21
// });
//
// person.save();
