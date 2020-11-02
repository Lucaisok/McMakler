const express = require("express");
const app = express();
const server = require("http").Server(app);
const compression = require("compression");

app.use(express.json());

app.use(compression());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(express.static("public"));

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

server.listen(8080, function () {
    console.log("McMakler server listening.");
});
