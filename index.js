const { fetchBreedDescription } = require("./breedFetcher");
let breedName = process.argv[2] || "";

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    if (desc === undefined) {
      console.log("No description available");
    } else {
      console.log(desc);
    }
  }
});
