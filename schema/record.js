const mongoose = require("mongoose");
const carschema = new mongoose.Schema({
  carnumber: {
    type: Number,
    required: true
  },
  cartype: {
    type: String,
    required: true
  },
  driveeachweek: {
    type: String,
    required: true
  },
  kilometersperliter: {
    type: String,
    required: true
  }
})

const schema = new mongoose.Schema({
  mail: {
    type: String,
    required: true
  },
  countrycode: {
    type: String,
    required: true
  },
  recordcode: {
    type: Number,
    required: true
  },
  shortflights: {
    type: String,
    required: true
  },
  longflights: {
    type: String,
    required: true
  },
  bustravel: {
    type: String,
    required: true
  },
  railwaytravel: {
    type: String,
    required: true

  },
  furniturecost: {
    type: String,
    required: true
  },
  clothescost: {
    type: String,
    required: true
  },
  suppliescost: {
    type: String,
    required: true
  },
  electricityconsumtion: {
    type: String,
    required: true
  },
  gasconsumption: {
    type: String,
    required: true
  },
  cars: {
    type: [carschema],
  }

});
const Record = mongoose.model('Records', schema);
module.exports = { Record };
