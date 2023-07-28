const axios = require("axios")
const tokenval = "climatiq_token"
const railwaytravel = (num) => Number(num) * 52 * 0.06 * 0.001;
const bustravelfootprint = (num) => Number(num) * 52 * 0.1 * 0.001;
// https://calculator.carbonfootprint.com/calculator.aspx?tab=6
const aptfootprint = (num) => Number(num) * 0.01;
// https://coolclimate.berkeley.edu/calculator
const gasconsumptionfootprint = (num) => Number(num) * 0.0022 * 12;
// https://coolclimate.berkeley.edu/calculator
const longflightsfootprint = (num) => Number(num) * 0.51;
// https://coolclimate.berkeley.edu/calculator
const shortflightsfootprint = (num) => Number(num) * 0.175;
// https://coolclimate.berkeley.edu/calculator
async function roadtravel(kiloms) {
  try {
    const milesconv = Number(kiloms) * 0.62;
    const response = await axios.post(
      "https://beta3.api.climatiq.io/estimate",
      {
        emission_factor: {
          activity_id:
            "passenger_vehicle-vehicle_type_black_cab-fuel_source_na-distance_na-engine_size_na",
        },
        parameters: { passengers: 1, distance: milesconv, distance_unit: "mi" },
      },
      { headers: { Authorization: `Bearer ${tokenval}` } }
    );
    return response.data.co2e * 52 * 0.001;
  } catch (error) {
    console.log(error);
    return 0;
  }
}
// https://beta3.api.climatiq.io/estimate
async function electricitykwh(kwhval) {
  try {
    const evalintj = Number(kwhval) * 0.0000036;
    const response = await axios.post(
      "https://beta3.api.climatiq.io/estimate",
      {
        emission_factor: {
          activity_id: "electricity-energy_source_biogas_corn_chp",
        },
        parameters: {
          energy: evalintj,
          energy_unit: "TJ",
        },
      },
      { headers: { Authorization: `Bearer ${tokenval}` } }
    );
    return response.data.co2e * 12 * 0.001;
  } catch (error) {
    return 0;
  }
}
// https://beta3.api.climatiq.io/estimate
function dietval(value) {
  if (value = "nonveg") {
    return 3.5;
  }
  if (value = "veg") {
    return 2;
  }
  if (value = "vegan") {
    return 1.5;
  }
  return 0
}
module.exports = { railwaytravel, bustravelfootprint, aptfootprint, gasconsumptionfootprint, longflightsfootprint, shortflightsfootprint, roadtravel, electricitykwh, dietval };
