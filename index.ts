#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("Welcome To Word Count App"));
const promptColor = chalk.blue;

const secntence = await inquirer.prompt([{
    type: "input",
    name: "name",
    message: promptColor("Enter Your Sentence"),
}]);

const ans = secntence.name.trim().split(" ")
console.log(chalk.green(`Word Count Is: ${chalk.red(ans.length)}`));

