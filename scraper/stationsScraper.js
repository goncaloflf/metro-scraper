const rp = require("request-promise");
const $ = require("cheerio");
const url = "https://www.metrolisboa.pt/viajar/proximoscomboios/";

let stationsScraper = {
  getAll: () => {
    return rp(url)
      .then(function(html) {
        let store = { stations: [] };
        let stations = $("#estacao_tempo_espera > option", html);
        for (let i = 0; i < stations.length; i++) {
          if (stations[i].attribs.value === "") continue;
          store.stations.push({
            code: stations[i].attribs.value,
            name: stations[i].children[0].nodeValue
          });
        }
        return store;
      })
      .catch(function(err) {
        //handle error
        console.log("error");
      });
  }
};

module.exports = stationsScraper;
