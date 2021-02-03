const db = require("../db/registros");

exports.registerUser = (req, res) => {
  const userInfo = req.body;
  db.registros.push(userInfo);
  res.status(200).json({
    error: false,
    data: null,
    message: "Succesfully",
  });
};

exports.getRegisters = (req, res) => {
  res.status(200).json({
    error: false,
    data: db.registros,
    message: "Succesfully",
  });
};
