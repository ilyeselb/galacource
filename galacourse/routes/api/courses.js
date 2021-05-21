const express = require("express");
const router = express.Router();
const axios = require("axios");
const path = require('path');
const middleware = require("../../utility/middleware")
const fs = require('fs');

//@route /api/tournaments
//method POST
//public
//get courses 

//joining path of directory 
const directoryPath = path.join(__dirname, '../../courses');

const readDirectory = () => {
}
router.get("/", middleware,(req, res) => {
    console.log("api");
    let folders = []
    fs.readdir(directoryPath, (err, files) => {
        files.map((file, index) => {
            folders.push({ title: file, id: index })
        })
        return res.json(folders)
    })
});
router.get("/video/:path", (req, res) => {
    const directoryPath = path.join(__dirname, '../../courses/' + req.params.path);
    fs.readdir(directoryPath, (err, files) => {
        return res.json(files)
    })
});

module.exports = router;
