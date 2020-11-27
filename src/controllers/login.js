const path = require("path");

const login = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/login/login.html`));
};
module.exports = {
  getLogin: login
};