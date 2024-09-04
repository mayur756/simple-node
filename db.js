const { connect } = require("mongoose")

const dbconnact = async (req, res) => {
    await connect("mongodb://localhost:27017/user");
    console.log("mogodb connection successful");
}

module.exports = dbconnact;