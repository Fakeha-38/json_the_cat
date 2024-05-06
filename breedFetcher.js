const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log("error: ", error.message);
      return;
    }
    
    const catData = JSON.parse(body);
    if (catData.length === 0) {
      const breedError = "Breed not found, please try again.";
      console.log(breedError);
      callback(breedError, null);
      return;
    } else {
      const description = catData[0].description;
      // console.log(description);
      callback(null, description);
      return;
    }
  });
};


module.exports = { fetchBreedDescription };
