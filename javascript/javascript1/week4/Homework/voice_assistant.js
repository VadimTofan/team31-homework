console.log("===========Voice Assistant===========");

let voiceAssistant = {
  hello: ["Hello", "Hi there", "Greetings", "Hey", "Good to see you"],
  yourName: [
    "Your name is:",
    "Have you forgotten that your name is:",
    "I think your name is:",
    "As far as i can remember, your name is:",
  ],
  wyd: [
    "How are you today?",
    "How can I help you?",
    "Is there anything I can do for you?",
    "What's on your mind?",
    "How's your day going?",
    "Need any assistance?",
  ],
  todo: [
    "Your todo list contains",
    "You have added the following to your todo list",
    "Last time I checked, your todo list had the following items:",
    "Here's what's on your todo list:",
    "Your tasks for today are:",
  ],
  add: [
    "has been added to your todo list",
    "was just added to the list",
    "is added to your todo list",
    "is now on your todo list",
    "has been successfully added",
    "is added to your tasks",
  ],
  remove: [
    "has been removed from your todo list",
    "was just removed from the list",
    "is removed from your todo list",
    "has been deleted from your tasks",
    "is no longer on your todo list",
    "has been cleared from your list",
  ],
  day: [
    "Today is",
    "Last time I checked, it was",
    "I am pretty sure it's",
    "According to my calendar, it's",
    "The date is",
    "It's currently",
  ],
  calc: [
    "The total amount is:",
    "The result is:",
    "Bruv, quick maffs got me:",
    "After calculating, I got:",
    "The answer is:",
    "Here's the result:",
  ],
  timer: [
    "Timer was set for",
    "I've set timer for",
    "The timer has been set for",
    "Your timer is set for",
    "Countdown starts now for",
    "Timer activated for",
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
    return `${getRandomAnswer(voiceAssistant.hello)} ${userName}`;
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
      return `${todoItem} is already on the todo list.`;
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
      return `${todoItem} is not in your todo list.`;
    }
  }

  if (
    command.toLowerCase().includes("what") &&
    command.toLowerCase().includes("on my todo")
  ) {
    if (!userData.todoList || !userData.todoList.length) {
      return "Your todo list is empty.";
    }
    let reply = `${getRandomAnswer(voiceAssistant.todo)}`;
    for (i = 0; i < userData.todoList.length; i++) {
      reply += `\n- ${userData.todoList[i]}`;
    }
    return reply;
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
console.log(userData.todoList[0]);
