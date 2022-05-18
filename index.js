const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./model/Employee");
const Engineer = require("./model/Engineer");
const Intern = require("./model/Intern");
const Manager = require("./model/Manager");

function menu(){
    return{
        name: "menu",
        type: "list",
        message: "Who else is on the team?",
        choices:[
            {
                name: "Employee",
                value: "Employee"
            },
            {
                name: "Intern",
                value: "Intern"
            },
            {
                name: "That's it!",
                value: "exit"
            }
        ]
    }
}

function init(){
    inquirer
    .prompt(
        questions
    )
    .then((answers)=> fs.writeFile("index.html", generateHtml))
}



function generateHtml(){

}