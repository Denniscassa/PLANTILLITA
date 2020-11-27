const path = require("path");

const inicio = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/inicio/inicio.html`));
};
module.exports = {
  getInicio: inicio
};
