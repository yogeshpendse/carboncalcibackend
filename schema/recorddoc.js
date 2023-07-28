const mongoose = require("mongoose");
const carschema = new mongoose.Schema({
  carnumber: {
    type: Number,
    required: true,
  },
  cartype: {
    type: String,
    required: true,
  },
  driveeachweek: {
    type: String,
    required: true,
  },
  kilometersperliter: {
    type: String,
    required: true,
  },
});

const schema = new mongoose.Schema({
  aptsize: { type: String, required: true, minlength: 1 },
  bustravel: { type: String, required: true, minlength: 1 },
  country: { type: String, required: true, minlength: 1 },
  countycode: { type: String, required: true, minlength: 1 },
  diet: { type: String, required: true, minlength: 1 },
  electricityconsumtion: { type: String, required: true, minlength: 1 },
  gasconsumption: { type: String, required: true, minlength: 1 },
  longflights: { type: String, required: true, minlength: 1 },
  mail: { type: String, required: true, minlength: 1 },
  railwaytravel: { type: String, required: true, minlength: 1 },
  shortflights: { type: String, required: true, minlength: 1 },
  recordcode: { type: Number, required: true },
  roadtravel: { type: String, required: true, minlength: 1 },
  name: { type: String, required: true, minlength: 1 },
  phone: { type: String, required: true, minlength: 1 },
  cityname: { type: String, required: true, minlength: 1 },
  cars: {
    type: [carschema],
  },
});
const Recorddoc = mongoose.model("Records", schema);
module.exports = { Recorddoc };
