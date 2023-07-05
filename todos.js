const readline = require("readline");
const { COMMAND, ERROR } = require("./Const.js");
const {
  showTodos,
  addTodos,
  deleteTodos,
  updateTodos,
} = require("./Command.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkVaildCommand(commandArr) {
  if (commandArr[0] === COMMAND.SHOW || commandArr[0] === COMMAND.DELETE) {
    if (commandArr.length != 2) {
      throw ERROR.COMMAND_ERROR;
    }
  } else if (
    commandArr[0] === COMMAND.ADD ||
    commandArr[0] === COMMAND.UPDATE
  ) {
    if (commandArr.length != 3) {
      //console.log(ERROR.COMMAND_ERROR);
      throw ERROR.COMMAND_ERROR;
    }
  } else {
    throw ERROR.COMMAND_ERROR;
  }
}

function executeCommand(str) {
  const commandArr = str.split("$");

  try {
    checkVaildCommand(commandArr);
    switch (commandArr[0]) {
      case COMMAND.SHOW: //show${status}
        showTodos(commandArr[1]);
        break;

      case COMMAND.ADD: //add${name}${tags}
        addTodos(commandArr[1], commandArr[2]);
        break;

      case COMMAND.DELETE: //delete${ID}
        deleteTodos(commandArr[1]);
        break;

      case COMMAND.UPDATE: //update${ID}${status}
        updateTodos(commandArr[1], commandArr[2]);
        break;

      default:
        throw ERROR.COMMAND_ERROR;
    }
  } catch (e) {
    console.error(e);
  }
}

function promptUser() {
  rl.question("명령하세요 : ", (command) => {
    executeCommand(command);
    promptUser();
  });
}

promptUser();

//가독성

//try catch
//모듈화
//ID
//상수화
//naming
//let const
