const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
      } else {
        const data = JSON.parse(body);
        let item = data[0];
        if (item) {
          callback(null, item.description);
        } else {
          callback(null, `${breedName} was not found`);
        }
      }
    }
  );
};
module.exports = { fetchBreedDescription };
