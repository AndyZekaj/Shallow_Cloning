// Task 2
// Given an array tasks containing a series of objects:

// Create a function called finishTask that:
// takes in input an array of tasks
// removes the last item from the array
// returns the updated array
// The original task array must not be modified.


const tasks = [
{
task: "clean apartment",
priority: 5
},
{
task: "learn objects",
priority: 2
},
{
task: "practice JavaScript",
priority: 1
}
];

function finishTask(tasks) {
    
    const newTasks = [...tasks];
    newTasks.pop();
    return (newTasks)
}

const callingFunc = finishTask(tasks);

console.log(callingFunc);

console.log(tasks);



