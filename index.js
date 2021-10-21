const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");
const path = require("path");


inquirer
  .prompt([
    { 
      type: "input",
      message: "What is the Title for your project?",
      name: "Title",  
         },
    { 
      type: "input",
      message: "Please type a detailed Description of your project?",
      name: "Description",  
         },
    { 
        type: "input",
        message: "How is your application Installed?",
        name: "Installation",  
    },
    { 
        type: "input",
        message: "How is your application utilized/navigated?",
        name: "Usage",  
        },
    { 
        type: "input",
        message: "Please list the Technologies used?",
        name: "Technologies-Used",  
        },
    { 
        type: "input",
        message: "Who contributed and what is their title (Nicholas Smith Software Engineer)",
        name: "Credits/Contributions",  
        },
    { 
        type: "input",
        message: "Future Development Plans/Summary?",
        name: "Future-Development",  
        },
    { 
        type: "checkbox",
        message: "Can others Contribute?",
        choices: ["yes","no"],
        name: "How-to-Contribute",  
        },
    { 
        type: "checkbox",
        message: "Please type a detailed Description of your project?",
        choices: ["None",
        "MIT","Apache License 2.0",
        "GNU General Public License v3.0",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License",
        "GNU Affero General Public License 3.0",
        "GNU General Public License 2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense"],
        name: "License",  
        },
         
])


.then((response) => {
    return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
});

// const generateReadMe = (answers) => (

// )


// turns html, css, java into dot points.
// input.split(“,”).map(tech => tech.trim()).map(cleanTech => ` - ${cleanTech}`)
