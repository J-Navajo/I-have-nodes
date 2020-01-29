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

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "name"
    },
    {
      type: "checkbox",
      message: "what is your favorite color?",
      name: "stack",
      choices: [
          "red", "blue", "pink", "green"]
    },
    {
      type: "list",
      message: "what is your preferred method of communication?",
      name: "contact"
    }
  ])
  .then(function(data) {
      const filename = data.name.toLowerCase().split(' ').join('') + ".json";

      fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
        if (err) {
            return console.log (err);
        }  
        console.log("Success");
      })
  });