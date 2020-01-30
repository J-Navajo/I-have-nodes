const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {

}

init();

const inquirer = require("inquirer");
// using inquirer to get the username and the color pick
const fs = require("fs");
const generatehtml = require("./generatehtml");
const axios = require("axios");



inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username"
    },
    {
      type: "checkbox",
      message: "what is your favorite color?",
      name: "color",
      choices: [
          "red", "blue", "pink", "green"]
    }
  ])
  .then(function({username, color}) {
    console.log(username, color);
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(response) {
      console.log(response.data)
    })
      // const filename = data.name.toLowerCase().split(' ').join('') + ".json";

      // fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      //   if (err) {
      //       return console.log (err);
      //   }  
      //   console.log("Success");
      // })
  });