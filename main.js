#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.blueBright.bold("\n\tWELCOME TO MUNTAHA'S TO-DO LIST APP\n"));
/*while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellow("ENTER YOUR NEW TASK:")
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.greenBright`${addTask.task} Task added in To-Do List Successfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.yellow("DO YOU WANT TO ADD MORE TASK?"),
            default: "False"
        }
    ]);
    conditions = addMoreTask.addmore
}

console.log(chalk.magentaBright.bold("\nYOUR UPDATED TO-DO LIST:"), todoList);*/
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "SELECT AN OPTION YOU WANT TO DO:",
                choices: [
                    "Add Task",
                    "Delete Task",
                    "Update Task",
                    "View To-Do list",
                    "Exit",
                ],
            },
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deletetask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View To-Do list") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "ENTER YOUR NEW TASK:",
        },
    ]);
    todoList.push(newTask.task);
    console.log(`\n${newTask.task} Task added successfully in To-Do List`);
};
// function to view all to-do list
let viewTask = () => {
    console.log("\n Your To-Do List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// function to delete task from list
let deletetask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "ENTER THE INDEX NUMBER OF THE TASK YOU WANT TO DELETE:",
        },
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n${deletedTask} this task has been deleted from your To-Do list!`);
};
// function to update a task
let updateTask = async () => {
    await viewTask();
    let updateTask_Index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "ENTER THE INDEX NUMBER OF THE TASK YOU WANT TO UPDATE:"
        },
        {
            name: "new_task",
            type: "input",
            message: "NOW ENTER NEW TASK'S NAME:"
        }
    ]);
    todoList[updateTask_Index.index - 1] = updateTask_Index.new_task;
    console.log(`\nTask at index no. ${updateTask_Index.index - 1} updated successfully [For updated list check option: View To-Do list]`);
};
main();
