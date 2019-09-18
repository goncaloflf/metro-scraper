var express = require("express");
var detailScraper = require("../scraper/detailScraper");
var router = express.Router();

/* GET detail listing. */
router.get("/", function(req, res, next) {
  res.send("Please introduce a resource: e.g: /detail/BC");
});

router.get("/:code", function(req, res, next) {
  detailScraper.getOne(req.params.code).then(function(result) {
    res.send(result);
  });
});

module.exports = router;
