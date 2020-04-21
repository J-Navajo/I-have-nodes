const inquirer = require("inquirer");
// using inquirer to get the username and the color pick
const pdf = require("html-pdf");
const generatehtml = require("./generatehtml");
const axios = require("axios");
var data = {}

const questions = [

];

function writeToFile(fileName, data) {

}

function init() {

  inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username"
    },
    {
      type: "list",
      message: "what is your favorite color?",
      name: "color",
      choices: [
        "red", "blue", "pink", "green"]
    }
  ])
  .then(function ({ username, color }) {
    console.log(username, color);
    const queryUrl = `https://api.github.com/users/${username}`;
data.username = username
data.color = color
    axios.get(queryUrl)
      .then(function (response) {
        console.log(response.data)
        data.avatar_url = response.data.avatar_url;
        data.name = response.data.name;
        data.location = response.data.location;
        data.html_url = response.data.html_url;
        data.blog = response.data.blog;
        data.bio = response.data.bio;
        data.public_repos = response.data.public_repos;
        data.followers = response.data.followers;
        data.following = response.data.following;
        data.company = response.data.company;

        axios
          .get(`https://api.github.com/users/${username}/starred`)
          .then(function (response) {
            let stargazers_count = 0
            for (let i =0; i < response.data.length; i++) {
              stargazers_count = stargazers_count + response.data[i].stargazers_count;
            }
           
              data.stargazers_count = stargazers_count
              console.log(data)
         const html = generatehtml(data)
              pdf.create(html).toFile("./profile.pdf",function(err, res){
                console.log(res.filename);
              });
          })
      })

  })
  .catch(error => {
    console.log(error)
  });
}

init();




