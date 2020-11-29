const axios = require("axios");
const requestConfig = require("./utils/data");

axios(requestConfig).then((response) => {
  console.log("IT´S WORKING!!");
})
