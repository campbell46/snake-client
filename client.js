const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "192.168.2.32",
    port: 50541,
  });

  // const myTimeout = setTimeout(conn.write("Move: left"), 5000);

  conn.setEncoding("utf8");

  // const myTimeout = setTimeout(conn.write("Move: left"), 50);

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SAC");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });



  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};


module.exports = {
  connect
};