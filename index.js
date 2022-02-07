//Required Info Exports
const Engineer=require('./lib/Engineer.js');
const Intern=require('./lib/Intern.js');
const Manager=require('./lib/Manager.js');
const generateProfile=require('./src/generateHTML.js')
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath=path.join(OUTPUT_DIR, "index.html");

//Required packages
const fs=require('fs');
const inquirer=require('inquirer');

profile=[];

function runApp() {

// Questions for manager role
function managerQuestions() {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is manager's name? (Required)"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID? (Required)"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email? (Required)"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? (Required)",
            validate: officeNumber=> {
                if (officeNumber) {
                  return true;
                } else {
                  console.log("Please enter the manager's office number!");
                  return false;
                }
              }
        },
        {
            type: "list",
            name: "addEmployees",
            message: "What type of employee would you like to add for team profile?",
            choices: ["Manager", "Engineer", "Intern","I don\'t want to add any more team member"],
        }
    ])
    .then(managerAnswers=> {
      const manager=new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
      profile.push(manager);
      switch(answers.addEmployees) {
        case "Engineer":
            engineerQuestions();
            break;
        case "Intern":
            internQuestions();
            break;
        default: 
        writeToFile('../dist/index', generateProfile(profile))
    };
  
  });
}
managerQuestions();

// Questions for engineer role
function engineerQuestions() {
    inquirer.prompt([ 
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name? (Required)"
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID? (Required)" 
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email? (Required)"
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's github address? (Required)",
        validate: github=> {
            if (github) {
              return true;
            } else {
              console.log("Please enter the engineer's github address!");
              return false;
            }
          }
        },
        {
            type: "list",
            name: "addEmployees",
            message: "What type of employee would you like to add for team profile?",
            choices: ["Manager", "Engineer", "Intern","I don\'t want to add any more team member"],
        }
    ])
    .then(answers=> {
      const engineer=new Engineer(answers.name, answers.id, answers.email, answers.github);
      profile.push(engineer);
      switch(answers.addEmployees) {
        case "Engineer":
            engineerQuestions();
            break;
        case "Intern":
            internQuestions();
            break;
        default: 
        writeToFile(outputPath, generateProfile(profile))
    };
  
  });
}

// Questions for intern role
function internQuestions() {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name? (Required)"
      },

      {
        type: "input",
        name: "id",
        message: "What is the intern's ID? (Required)" 
      },

      {
        type: "input",
        name: "email",
        message: "What is the intern's email? (Required)"
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school name? (Required)",
        validate: school=> {
            if (school) {
              return true;
            } else {
              console.log("Please enter the intern's school name!");
              return false;
            }
          }
       },
       {
        type: "list",
        name: "addEmployees",
        message: "What type of employee would you like to add for team profile?",
        choices: ["Manager", "Engineer", "Intern","I don\'t want to add any more team member"],
        }
    ])
    .then(answers=> {
      const intern=new Intern(answers.name, answers.id, answers.email, answers.school);
      profile.push(intern);
      switch(answers.addEmployees) {
        case "Engineer":
            engineerQuestions();
            break;
        case "Intern":
            internQuestions();
            break;
        default: 
        writeToFile(outputPath, generateProfile(profile))
    };
  
  });
};
}

function writeToFile(filename,data) {
    fs.writeFile(filename,data), (err) => {
        if(err) throw err;
        console.log('file saved')
    }
};
runApp();