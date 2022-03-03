const app = require("./app");
const config = require("./app/config");
const mongoose = require("mongoose");

//Connect to database
mongoose.connect(config.db.uri)
    .then(() => {
        console.log("Conneted to the database!");
    })
    .catch((error) => {
        console.log("Cannot connet to the database!", error);
    });

// start server     
const PORT = config.app.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});