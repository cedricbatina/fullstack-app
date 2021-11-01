// import express
import express from "express";
// import cors
import cors from "cors";
// import Router
import Router from "./routes/routes.js";
//const Router = require("./routes/routes");
// init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
//use router
app.use(Router);

// set the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
