require('dotenv').config();
const fs = require('fs');
const GOOGLE_API_KEY = "&key=" + process.env.GOOGLE_API_KEY;
const URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=dental+clinics+in+Antalya+Turkey"

/**
 * Assumes data is JSON array of results
 * @param {JSON} data 
 */
function saveToFile(data) {
  const file = fs.createWriteStream('data.json');
  existingData = JSON.parse(file);
  existingData.push(data);
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

async function getURL() {
  for (let i = 0; i < 1; i++) {
      let next_page_token = "";

      let query_url = URL + GOOGLE_API_KEY;
      next_page_token != "" ? query_url += "&pagetoken=" + next_page_token : query_url += "";

      const response = await fetch(query_url);
      const data = await response.json();

      if(data.status == "OK") {
        data.next_page_token != undefined ? next_page_token = data.next_page_token : next_page_token = "";
        // saveToFile(data.results);
        const file = fs.createWriteStream('data.json');
        existingData = JSON.parse(file);
        existingData.push(data.results);
        fs.writeFileSync('data.json', JSON.stringify(data.results, null, 2));

      }
      else {
        console.log("Error: " + data.status);
        process.exit();
      }

  }
}
getURL();