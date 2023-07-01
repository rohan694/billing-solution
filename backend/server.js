const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express();

var corsOptions = {
    origin: "https://rohan694.github.io"
};

app.use(cors(corsOptions));
app.use(cookieParser());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay, httpOnly: true, path: "/", sameSite: "lax", secure: "true" },
    resave: false
}));

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/debtors.routes")(app);
require("./app/routes/companies.routes")(app);
require("./app/routes/sendBillTransactions.routes")(app);
require("./app/routes/creditors.routes")(app);
require("./app/routes/dashboard.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});