console.log("=========CactusIO Interactive=========");


const activity = [{
    date: "13/02/2025",
    activity: "Facebook", //Had to add this manually, as inputs take today's date.
    duration: 35          //And i wanted to test if choosing only specific date would work.
}]; 
const today = new Date();
const todayDate = today.toLocaleDateString("en-GB")

function addActivity(app, duration) {
    if (typeof app === "string" && typeof duration === "number" && duration > 0) {
        activity.push({ date: todayDate, activity: app, duration: duration });
        console.log("Activity added:", activity);
    } else {
        console.warn("You have made a mistake in the input. Format: App -> 'string', Duration -> number > 0");
    }
}


addActivity("Youtube", 1);
addActivity(23, "Instagram");      
addActivity("Candy Crush Saga", 555);  

console.log(activity); 

function showStatus() {
    let activityDuration = 0;
    let activitiesToday = 0;

    for (let i = 0; i < activity.length; i++) {
        activityDuration = activity[i].duration + activityDuration;
    }

    for (let i = 0; i < activity.length; i++) {
        if (activity[i].date === todayDate) {
            activitiesToday = activitiesToday+1;
        }
    }

    if (activitiesToday  === 0) {
        console.log("You don't have any activities registered for today.")
    } else if (activity.length === 0) {
        console.log("You don't have any registered activities.")
    } else {
        console.log(`You have added ${activitiesToday} activities. They amount to ${activityDuration} min. of usage`)
    }
}

showStatus();


function mostTimeSpent() {
    let mostActivity = activity[0];

    if (activity.length === 0) {
        console.log("You don't have any registered activities.");
        return;
    }

    for (let i = 1; i < activity.length; i++) {
        if (activity[i].duration > mostActivity.duration) {
            mostActivity = activity[i];
        }
    }

    if (mostActivity.duration === 0) {
        console.log("All your registered activities have a duration of 0 minutes.");
    } else {
        console.log("The activity you spent the most time on is '" + mostActivity.activity + "' with a total duration of " + mostActivity.duration + " minutes.");
    }
}

mostTimeSpent();