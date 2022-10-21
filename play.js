const { connect } = require("./client");
const { setupInput } = require("./input");

//log connecting to client
console.log("Connecting...");

//then call function to create connection
setupInput(connect());