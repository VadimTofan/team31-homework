console.log("===========Voice Assistant===========");

let voiceAssistant = {
  hello: ["Hello", "Hi there", "Greetings", "Hey", "Good to see you", "Howdy"],
  yourName: [
    "Your name is:",
    "Have you forgotten that your name is:",
    "I think your name is:",
    "As far as i can remember, your name is:",
  ],
  wyd: [
    "how are you today?",
    "how can I help you?",
    "is there anything I can do for you?",
    "what's on your mind?",
    "how's your day going?",
    "need any assistance?",
  ],
  todo: [
    "Your todo list contains:",
    "You have added the following to your todo list:",
    "Last time I checked, your todo list had the following items:",
    "Here's what's on your todo list:",
    "Your tasks for today are:",
  ],
  todoExists: [
    "is already in your todo list!",
    "is already added to your list.",
    "is already on your todo.",
    "is already planned for.",
    "is already listed. No need to add it again!",
    "is in your todo list. Anything else?",
  ],
  todoNotExists: [
    "{item} is not in your todo list.",
    "{item} is missing from your list.",
    "{item} isn't on your todo list.",
    "{item} was not found in your tasks.",
    "{item} doesn't seem to be in your list.",
    "{item} isn't on the list. Want to add it?",
  ],
  todoEmpty: [
    "Your todo list is empty.",
    "There's nothing on your todo list right now.",
    "Your task list is currently empty.",
    "You have no tasks in your todo list.",
    "Your todo list is blank. Want to add something?",
    "Looks like your todo list is empty. Need any tasks?",
  ],
  add: [
    "has been added to your todo list.",
    "was just added to the list.",
    "is added to your todo list.",
    "is now on your todo list.",
    "has been successfully added.",
    "is added to your tasks.",
  ],
  remove: [
    "has been removed from your todo list.",
    "was just removed from the list.",
    "is removed from your todo list.",
    "has been deleted from your tasks.",
    "is no longer on your todo list.",
    "has been cleared from your list.",
  ],
  day: [
    "Today is",
    "Last time I checked, it was",
    "I am pretty sure it's",
    "According to my calendar, it's",
    "The date is",
    "It's currently",
  ],
  result: [
    "The total amount is:",
    "The result is:",
    "Bruv, quick maffs got me:",
    "After calculating, I got:",
    "The answer is:",
    "Here's the result:",
  ],
  resultError: [
    "I couldn't calculate that.",
    "Sorry, I couldn't process that calculation.",
    "That doesn't seem to be a valid calculation.",
    "I'm not sure how to compute that.",
    "I couldn't figure that one out.",
    "Hmm, that doesn't look like a valid math problem.",
  ],
  timer: [
    "Timer was set for",
    "I've set timer for",
    "The timer has been set for",
    "Your timer is set for",
    "Countdown starts now for",
    "Timer activated for",
  ],
  timerError: [
    "Sorry, I couldn't understand the timer duration.",
    "I didn't catch the time you wanted for the timer.",
    "Can you repeat that? I couldn't set the timer.",
    "I need a clear duration to set the timer.",
    "Hmm, I couldn't figure out how long to set the timer for.",
    "Please specify a valid time for the timer.",
  ],
};

let userData = {};

function getRandomAnswer(answer) {
  return answer[Math.floor(Math.random() * answer.length)];
}

function getReply(command) {
  if (
    command.toLowerCase().includes("hello") &&
    command.toLowerCase().includes("my name is")
  ) {
    let userName = command.split(" ").slice(-1)[0];
    userData.userName = userName;
    return `${getRandomAnswer(
      voiceAssistant.hello
    )} ${userName} ${getRandomAnswer(voiceAssistant.wyd)}`;
  }

  if (
    command.toLowerCase().includes("what") &&
    command.toLowerCase().includes("my name")
  ) {
    return `${getRandomAnswer(voiceAssistant.yourName)} ${userData.userName}`;
  }

  if (
    command.toLowerCase().includes("add") &&
    command.toLowerCase().includes("to my todo")
  ) {
    let todoItem = command.toLowerCase().match(/add (.+?) to my todo/i)[1];
    if (!userData.todoList) {
      userData.todoList = [];
    }
    if (userData.todoList.includes(todoItem)) {
      return `${todoItem} ${getRandomAnswer(voiceAssistant.todoExists)}.`;
    }
    userData.todoList.push(todoItem);
    return `${todoItem} ${getRandomAnswer(voiceAssistant.add)}`;
  }

  if (
    command.toLowerCase().includes("remove") &&
    command.toLowerCase().includes("from my todo")
  ) {
    let todoItem = command.toLowerCase().match(/remove (.+?) from my todo/i)[1];
    let itemIndex = userData.todoList.indexOf(todoItem);
    if (itemIndex > -1) {
      userData.todoList.splice(itemIndex, 1);
      return `${todoItem} ${getRandomAnswer(voiceAssistant.remove)}`;
    } else {
      return `${todoItem} ${getRandomAnswer(voiceAssistant.todoNotExists)}`;
    }
  }

  if (
    command.toLowerCase().includes("what") &&
    command.toLowerCase().includes("on my todo")
  ) {
    if (!userData.todoList || !userData.todoList.length) {
      return `${getRandomAnswer(voiceAssistant.todoEmpty)}`;
    }
    let reply = `${getRandomAnswer(voiceAssistant.todo)}`;
    for (i = 0; i < userData.todoList.length; i++) {
      reply += `\n- ${userData.todoList[i]}`;
    }
    return reply;
  }

  if (
    command.toLowerCase().includes("what day") &&
    command.toLowerCase().includes("today")
  ) {
    let todayDate = new Date();
    let day = todayDate.getDate();
    let month = todayDate.toLocaleString("default", { month: "long" });
    let year = todayDate.getFullYear();
    let formattedDate = `${day}. of ${month} ${year}`;
    return `${getRandomAnswer(voiceAssistant.day)} ${formattedDate}`;
  }

  if (
    command.toLowerCase().includes("what is") &&
    (command.includes("/") ||
      command.includes("*") ||
      command.includes("+") ||
      command.includes("-"))
  ) {
    let calculationMatch = command.match(/\d+\s*[\+\-\*/]\s*\d+/);
    //I could not figure this out myself. had to use chat gpt as
    //There is clearly not enough material explaining regex on the web.
    //As far as i understood \d+ is to match the digits 1<
    //s* to match all spaces, [\+\-\*/] to match operators
    if (calculationMatch) {
      let calculation = calculationMatch[0];
      {
        let result = eval(calculation);
        return `${getRandomAnswer(voiceAssistant.result)} ${result}.`;
      }
    } else {
      return `${getRandomAnswer(voiceAssistant.resultError)}`;
    }
  }

  if (
    command.toLowerCase().includes("set") &&
    command.toLowerCase().includes("timer") &&
    command.toLowerCase().includes("for")
  ) {
    let timerMatch = command.match(/(\d+)\s*minutes/);

    if (timerMatch) {
      let minutes = parseInt(timerMatch[1]);

      setTimeout(() => {
        console.log("Timer done!");
      }, minutes * 60 * 1000);

      return `${getRandomAnswer(voiceAssistant.timer)} ${minutes} minutes.`;
    } else {
      return `${getRandomAnswer(voiceAssistant.timerError)}`;
    }
  }

  return;
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add Fishing to my todo"));
console.log(getReply("Add Fishing to my todo"));
console.log(getReply("Add Fishing to my todo"));
console.log(getReply("Add Fishing to my todo"));
console.log(getReply("Add Singing in the Shower to my todo"));
console.log(getReply("Remove Fishing from my todo"));
console.log(getReply("What is on my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 2?"));
console.log(getReply("What is three + two?"));
console.log(getReply("Set timer for 5 minutes"));
console.log(getReply("Set timer for five minutes"));
