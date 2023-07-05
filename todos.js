const readline = require("readline");
const { COMMAND, ERROR } = require("./Const.js");
const {
  showTodos,
  addTodos,
  deleteTodos,
  updateTodos,
} = require("./Command.js");
const { checkVaildCommand } = require("./CheckValid.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

// 함수;

// //todos.js
// promptUser;
// executeCommand;

// //CheckVaild.js
// checkVaildCommand;
// checkValidStatus;
// checkValidId;

// //Util.js
// getId;
// showStatusCnt;
// updateStatusCnt;

// //Command.js
// showTodos;
// addTodos;
// deleteTodos;
// updateTodos;

// //Data.js
// 데이터;
// statusCnt;
// todos;
