const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");

const app = express();
app.use(bodyParser.json());

const validateAdmin = (req, res, next) => {
  const userAuth = req.headers.authorization;
  console.log(userAuth);
  if (userAuth === 'admin') {
    return next();
  }
  res.status(403).json({
    error: true,
    data: null,
    message: "[FORBIDEN] - You do not have permissions",
  });
};

//ROUTES
app.post("/registro", controller.registerUser);
app.get("/obtenerRegistros", validateAdmin, controller.getRegisters);

app.listen(3000, () => {
  console.log(`app listening port 3000`);
});
