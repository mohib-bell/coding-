const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const PatientRoute = require("./routes/patient.route");

dotenv.config();
require("./config/dbConnection")
  .sequelize.sync()
  .then(() => {
    console.log("__Connection Successfull to DB__");
  })
  .catch((error) => {
    console.log(error, "__Failed to connect to Database...");
  });

app.use(cors());
app.use(express.json());
require("./routes/patient.route")(app);
require("./routes/practice.route")(app);
require("./routes/provider.route")(app);
require("./routes/cpt.route")(app);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
