const fs = require("fs");

function logReqRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `\n ${Date.now()} : ${req.method} ${req.path}`,
      (err, res) => {
        if (!err) {
          next();
        }
      }
    );
  };
}


module.exports = {logReqRes}