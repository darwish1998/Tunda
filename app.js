const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('Hello Darwish'));

// creating new  schema

const fruitSchema = new mongoose.Schema ({

  name: String,
  rating: Number,
  review: String
});

const  Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit ({

  name: "Liin balbeemo",
  rating: 4,
  review: "Mid aad iyo macaan iyo nafaqo"

});
fruit.save();
