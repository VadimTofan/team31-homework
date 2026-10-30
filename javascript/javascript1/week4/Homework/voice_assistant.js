console.log("===========Voice Assistant===========");

const voiceAssistant = {
  hello: ["Hello", "Hi there", "Greetings", "Hey", "Good to see you", "Howdy"],
  yourName: [
    "Your name is:",
    "Have you forgotten that your name is:",
    "I think your name is:",
    "As far as i can remember, your name is:",
  ],
  yourNameError: [
    "You need to provide a name.",
    "I can't save an empty name. Please tell me your name.",
    "It looks like you didn't say your name.",
    "I need a name to remember you.",
    "Your name is missing. Can you try again?",
    "I can't save a blank name. What should I call you?",
  ],
  howAreYou: [
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
    "not in your todo list.",
    "is missing from your list.",
    "isn't on your todo list.",
    "was not found in your tasks.",
    "doesn't seem to be in your list.",
    "isn't on the list. Want to add it?",
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
  commandError: [
    "I don't understand that command. Please try again.",
    "I didn't recognize that command. Can you rephrase it?",
    "I'm not sure what you want me to do.",
    "That command isn't supported. Try another one.",
    "Please give me a command I can help with.",
    "I couldn't understand your request. Can you say it differently?",
  ],
};

const user = {};

function getRandomAnswer(answer) {
  return answer[Math.floor(Math.random() * answer.length)];
}

function fetchRandomHello(command) {
  const name = command
    .replace("hello", "")
    .replace("my", "")
    .replace("name", "")
    .replace("is", "")
    .trim();
  const sayHello = getRandomAnswer(voiceAssistant.hello);
  const sayHowAreYou = getRandomAnswer(voiceAssistant.howAreYou);
  const sayYourNameError = getRandomAnswer(voiceAssistant.yourNameError);

  if (!name) return `${sayYourNameError}`;

  const splitted = name.split(" ");
  const verified = [];

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].trim()) {
      verified.push(splitted[i]);
    }
  }

  for (let i = 0; i < verified.length; i++) {
    const arrayOfWords = verified[i].split("");
    arrayOfWords[0] = arrayOfWords[0].toUpperCase();
    verified[i] = arrayOfWords.join("");
  }

  user.name = verified.join(" ");

  return `${sayHello} ${user.name} ${sayHowAreYou}`;
}

function addToTodo(command) {
  const todoItem = command.replace("add", "").replace("to my todo", "").trim();
  if (!todoItem.trim()) return "Can't understand the task";

  const sayAddedTodo = getRandomAnswer(voiceAssistant.add);
  const sayTodoExists = getRandomAnswer(voiceAssistant.todoExists);

  if (!user.todo) user.todo = [];
  if (user.todo.includes(todoItem)) return `${todoItem} ${sayTodoExists}`;

  user.todo.push(todoItem);
  return `${todoItem} ${sayAddedTodo}`;
}

function removeFromTodo(command) {
  const todoItem = command
    .replace("remove", "")
    .replace("from my todo", "")
    .trim();
  if (!user.todo) user.todo = [];
  const itemIndex = user.todo.indexOf(todoItem);
  const sayRemovedTodo = getRandomAnswer(voiceAssistant.remove);
  const sayTodoNotExists = getRandomAnswer(voiceAssistant.todoNotExists);

  if (itemIndex > -1) {
    user.todo.splice(itemIndex, 1);
    return `${todoItem} ${sayRemovedTodo}`;
  }
  return `${todoItem} ${sayTodoNotExists}`;
}

function whatIsOnTodo() {
  const sayTodoEmpty = getRandomAnswer(voiceAssistant.todoEmpty);
  const sayTodo = getRandomAnswer(voiceAssistant.todo);

  if (!user.todo || !user.todo.length) {
    return `${sayTodoEmpty}`;
  }

  let reply = `${sayTodo}`;

  for (let i = 0; i < user.todo.length; i++) {
    reply += `\n ${i + 1}. ${user.todo[i]}`;
  }
  return reply;
}

function getDate() {
  const todayDate = new Date();
  const day = todayDate.getDate();
  const month = todayDate.toLocaleString("default", { month: "long" });
  const year = todayDate.getFullYear();
  const formattedDate = `${month} ${day} ${year}`;
  const sayDate = getRandomAnswer(voiceAssistant.day);

  return `${sayDate} ${formattedDate}`;
}

function doBasicMath(command) {
  const expression = command
    .replace("what is", "")
    .replace("?", "")
    .trim()
    .replaceAll(" ", "");
  const operators = "+-/*%";

  for (let i = 0; i < expression.length; i++) {
    if (operators.includes(expression[i])) {
      const operator = expression[i];
      const numbers = expression.split(operator);
      if (!numbers[0] || !numbers[1]) return "Provide both numbers please";
      return operation(numbers[0], numbers[1], operator);
    }
  }

  function operation(numberOne, numberTwo, operator) {
    const first = Number(numberOne);
    const second = Number(numberTwo);
    if (operator === "+") return first + second;
    if (operator === "-") return first - second;
    if (operator === "*") return first * second;
    if (operator === "/") return first / second;
    if (operator === "%") return first % second;
  }
}

function setTimer(command) {
  const replaced = command
    .replace("set", "")
    .replace("timer", "")
    .replace("for", "")
    .trim();
  const splitted = replaced.split(" ");
  const verified = [];

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].trim()) {
      verified.push(splitted[i]);
    }
  }

  const duration = verified[0];
  const units = verified[1] ? verified[1] : "second";
  const sayTimer = getRandomAnswer(voiceAssistant.timer);
  const sayTimerError = getRandomAnswer(voiceAssistant.timerError);

  let timer = 0;

  if (units.includes("sec")) timer = duration * 1000;
  if (units.includes("min")) timer = duration * 60 * 1000;
  if (units.includes("hour")) timer = duration * 60 * 60 * 1000;
  if (units.includes("day")) timer = duration * 60 * 60 * 24 * 1000;

  if (timer > 0) {
    setTimeout(() => {
      console.log("Timer done!");
    }, timer);
    if (units.includes("day"))
      return `${sayTimer} ${duration > 1 ? `${duration} days` : `${duration} day`}`;
    if (units.includes("hour"))
      return `${sayTimer} ${duration > 1 ? `${duration} hours` : `${duration} hour`}`;
    if (units.includes("min"))
      return `${sayTimer} ${duration > 1 ? `${duration} minutes` : `${duration} minute`}`;
    return `${sayTimer} ${duration > 1 ? `${duration} seconds` : `${duration} second`}`;
  }
  return `${sayTimerError}`;
}

function getReply(command) {
  if (!command.trim()) return "Please provide a valid command";
  const lowered = command.toLowerCase().trim();
  if (lowered.includes("my") && lowered.includes("name is"))
    return fetchRandomHello(lowered);

  if (lowered.includes("what") && lowered.includes("my name")) {
    const sayName = getRandomAnswer(voiceAssistant.yourName);
    const sayUserName = user.name;
    const sayUserNameError = getRandomAnswer(voiceAssistant.yourNameError);

    if (!user.name) return `${sayUserNameError}`;

    return `${sayName} ${sayUserName}`;
  }

  if (lowered.includes("add") && lowered.includes("to my todo"))
    return addToTodo(lowered);

  if (lowered.includes("remove") && lowered.includes("from my todo"))
    return removeFromTodo(lowered);

  if (lowered.includes("what") && lowered.includes("on my todo"))
    return whatIsOnTodo();

  if (lowered.includes("what day") && lowered.includes("today"))
    return getDate();

  if (
    lowered.includes("what is") &&
    (lowered.includes("/") ||
      lowered.includes("*") ||
      lowered.includes("+") ||
      lowered.includes("-") ||
      lowered.includes("%"))
  ) {
    return doBasicMath(lowered);
  }

  if (
    lowered.includes("set") &&
    lowered.includes("timer") &&
    lowered.includes("for")
  ) {
    return setTimer(lowered);
  }

  const commandError = getRandomAnswer(voiceAssistant.commandError);
  return commandError;
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin     Franklin"));
console.log(getReply("Hello my name is"));
console.log(getReply("What is my name?"));
console.log(getReply("Add Fishing to my todo"));
console.log(getReply("Add Fishing to my todo"));
console.log(getReply("Add Camping to my todo"));
console.log(getReply("Add Buy groceries to my todo"));
console.log(getReply("Add Singing in the Shower to my todo"));
console.log(getReply("Remove Fishing from my todo"));
console.log(getReply("What is on my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 2 ?"));
console.log(getReply("Set timer for 5 sec"));
console.log(getReply("Set timer for five minutes"));
