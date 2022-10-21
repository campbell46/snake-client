const net = require("net");
const { IP, PORT } = require("./constants");

//create connection ising required IP and PORT
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  //set encoding
  conn.setEncoding("utf8");

  //on connection, log message and send initials to sever
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SAC");
  });

  //console log recieved data from server
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};


module.exports = {
  connect
};