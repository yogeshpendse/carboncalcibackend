const express = require('express');
const connecttoDb = require("./db/dbconn")
const { Recorddoc } = require("./schema/recorddoc")
const { railwaytravel, bustravelfootprint, aptfootprint, gasconsumptionfootprint, longflightsfootprint, shortflightsfootprint, roadtravel, electricitykwh, dietval } = require("./functions/index");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors())
connecttoDb();

app.get('/', (req, res) => {
  res.json({ message: "hellow world" })
});

app.get('/ping', (req, res) => {
  res.json({ message: "server is online" })
});

app.post("/injectvals", async (req, res) => {
  try {
    const postdata = req.body;
    const doc = new Recorddoc(postdata);
    await doc.save();
    res.json({ postdata })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "operation failed", error });
  }
})

app.get('/getfootprintval/:mail', async (req, res) => {
  try {
    const params = req.params;
    const dataa = await Recorddoc.find({ mail: params.mail });
    if (dataa.length < 1) {
      return res.status(400).json({ message: "please enter data" });
    }
    const dataobj = dataa[dataa.length - 1];
    const roadtravelval = await roadtravel(dataobj.roadtravel);
    const electricitykwhval = await electricitykwh(dataobj.electricityconsumtion);
    const totalvalue = roadtravelval + electricitykwhval + railwaytravel(dataobj.roadtravel) + bustravelfootprint(dataobj.bustravel) + gasconsumptionfootprint(dataobj.gasconsumption) + longflightsfootprint(dataobj.longflights) + railwaytravel(dataobj.railwaytravel) + shortflightsfootprint(dataobj.shortflights) + aptfootprint(dataobj.aptsize) + dietval(dataobj.diet);
    res.json({ footprintvalue: totalvalue })
  } catch (error) {
    console.log(error)
    res.status(400).json({ error });
  }
});

app.listen(3000, () => {
  console.log('server started');
});
