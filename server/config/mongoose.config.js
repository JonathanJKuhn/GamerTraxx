const mongoose = require("mongoose")
const connectionString = process.env.DB_URI

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch((err) => console.log("Something went wrong when connecting to the database", err))