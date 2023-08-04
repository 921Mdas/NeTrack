"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var index_js_1 = require("./routes/index.js");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var path_1 = require("path");
var url_1 = require("url");
var path_2 = require("path");
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = (0, path_2.dirname)(__filename);
var app = (0, express_1["default"])();
var port = 3000;
(0, dotenv_1.config)();
require("./config.db.js"); // Import the config.db.js file
app.use(body_parser_1["default"].json());
app.use((0, cors_1["default"])({
    credentials: true,
    origin: [
        "http://localhost:5173",
        "https://ne-track.vercel.app",
        "ne-track-ivx4wt711-921mdas.vercel.app",
        "ne-track-git-main-921mdas.vercel.app",
        "https://csto.onrender.com/",
    ],
    methods: "GET,POST,PUT,DELETE"
}));
app.use(express_1["default"].static(path_1["default"].resolve(__dirname, "svelte", "build")));
app.use("/", index_js_1["default"]);
app.get("*", function (_req, res) {
    res.sendFile(path_1["default"].resolve(__dirname, "svelte", "build", "index.html"));
});
app.listen(port, function () {
    console.log("💥 server has started at port", port);
});
