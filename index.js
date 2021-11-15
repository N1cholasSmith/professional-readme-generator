const inquirer = require("inquirer"); // to generate questions
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


inquirer
  .prompt([
    { 
      type: "input",
      message: "What is the Title for your project?",
      name: "Title",  
    //   validates to check that the user provided a value
      validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
         },
    { 
      type: "input",
      message: "Please type a detailed Description of your project?",
      name: "Description", 
      validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}}, 
         },
    { 
        type: "input",
        message: "How is your application Installed?",
        name: "Installation",
        validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},  
        },
    { 
        type: "input",
        message: "How is your application utilized/navigated?",
        name: "Usage",  
        validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
        },
    { 
        type: "input",
        message: "Please list the Technologies used?",
        name: "TechnologiesUtilized",  
        validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
        },
    { 
        type: "input",
        message: "Who contributed and what is their title (Nicholas Smith Software Engineer)",
        name: "CreditsContributions",  
        validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
        },
    { 
        type: "input",
        message: "Future Development Plans/Summary?",
        name: "FutureDevelopment",
        },
    { 
        type: "confirm",
        message: "Can others Contribute?",
        name: "HowToContribute",  
        },
    { 
        type: "list",
        message: "Please type a detailed Description of your project?",
        choices: [
        {name:"None"},
        {name:"MIT", value:"MIT"},
        {name:"APACHE License 2.0", value:"APACHE%20License%202.0"},
        {name:"GNU General Public License v3.0", value:"GNU%20General%20Public%20License%20v3.0"},
        {name:"BSD 3-Clause 'New' License", value:"BSD_3-Clause%20'New'%20License"},
        ],
        name: "License",  
        },
    {
        type: "input",
        message: "Please provide a detailed description of how tests are carried out?",
        name: "Tests",  
        },
        {
        type: "input",
        message: "what is your GitHub profile name",
        name: "GitHub",  
        },
        {
        type: "input",
        message: "Please provide a link to your GitHub profile",
        name: "GitHubProfile",  
            },
        {
        type: "input",
        message: "what is your email",
        name: "Email",  
        },

])


.then((response) => {
    return fs.writeFileSync(path.join (process.cwd(), "README.md"), generateMarkdown(response));
});

