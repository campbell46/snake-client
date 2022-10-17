let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (data) => {
  switch (data) {
  case "\u0003":
    process.exit();
    break;
  case "w":
    connection.write("Move: up");
    break;
  case "a":
    connection.write("Move: left");
    break;
  case "d":
    connection.write("Move: right");
    break;
  case "s":
    connection.write("Move: down");
    break;
  case "b":
    connection.write("Say: Over here sucka!");
    break;
  case "n":
    connection.write("Say: Dont eat me!");
    break;
  case "m":
    connection.write("Say: Im gonna win dis!");
    break;
  }
};

module.exports = {
  setupInput
};