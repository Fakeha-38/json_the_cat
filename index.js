// const request = require("request");
const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv;
const breedName = args.splice(2).join(" ");

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log("returning the description from callback: ", desc);
    return desc;
  }
});