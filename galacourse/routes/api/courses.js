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
const directoryPath = path.join(__dirname, '../../public/courses');


router.get("/",(req, res) => {
    let folders = []
    fs.readdir(directoryPath, (err, files) => {
        files.map((file, index) => {
            folders.push({ title: file, id: index })
        })
        console.log(files);
        console.log(directoryPath);
        return res.json(folders)
    })
});
router.get("/video/:path" ,(req, res) => {
    let folders = []
    const directoryPathVid = path.join(__dirname, '../../public/courses/' + req.params.path);
    fs.readdir(directoryPathVid, (err, files) => {
        files.map((file, index) => {
            folders.push({ title: file, id: index })
        })
        console.log(folders);
        return res.json(folders)
    })
});

module.exports = router;
