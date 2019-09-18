const puppeteer = require("puppeteer");
const $ = require("cheerio");
const url = "https://www.metrolisboa.pt/viajar/proximoscomboios/?estacao=";

let detailScraper = {
  getOne: code => {
    return puppeteer
      .launch()
      .then(function(browser) {
        return browser.newPage();
      })
      .then(function(page) {
        return page.goto(url + code).then(function() {
          return page.content();
        });
      })
      .then(function(html) {
        $(".result_title", html).each(function() {
          console.log($(this).text());
        });
        return html;
      })
      .catch(function(err) {
        //handle error
      });
  }
};

module.exports = detailScraper;
