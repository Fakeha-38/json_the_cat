const request = require("request");
const args = process.argv;
const catQuery = args.splice(2).join(" ");

request(`https://api.thecatapi.com/v1/breeds/search?q=${catQuery}`, (error, response, body) => {
  if (error) {
    console.log("error: ", error.message);
    return;
  }
  
  const catData = JSON.parse(body);
  if (catData.length === 0) {
    console.log("Breed not found, please try again.");
    return;
  } else {
    const description = catData[0].description;
    console.log(description);
  }
});