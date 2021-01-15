const request = require("request");
let breedName = process.argv[2] || "";

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
  (error, response, body) => {
    if (error) {
      throw error;
    } else if (response && response.statusCode !== 200) {
      console.log("bad response code: ", response.statusCode);
      process.exit(1);
    } else {
      const data = JSON.parse(body);
      let item = data[0];
      if (item) {
        console.log(item.description);
      } else {
        console.log(`${breedName} was not found`);
      }
    }
  }
);
