var express = require("express");
var stationsScraper = require("../scraper/stationsScraper");
var router = express.Router();

/* GET stations listing. */
router.get("/", function(req, res, next) {
  stationsScraper.getAll().then(function(result) {
    res.send(result);
  });
});

module.exports = router;
