const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "192.168.2.32",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

module.exports = {
  connect
};