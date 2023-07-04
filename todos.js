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
/*

let next_Id = 3;

function getId() {
  return next_Id++;
}

function showStatusCnt() {
  let outputStr = "현재상태 : ";

  statusCnt.forEach((status) => {
    outputStr += status.state + " : " + status.cnt + "개, ";
  });

  console.log(outputStr.slice(0, -2));
}

function showTodos(status) {
  if (status === "all") {
    showStatusCnt();
  } else {
    if (!checkValidStatus(status)) {
      console.log(ERROR.STATUS_ERROR);
      return;
    }

    const matchedStatusArr = todos.filter((todo) => todo.status === status);

    console.log(status + "리스트 : 총" + matchedStatusArr.length + "건");

    matchedStatusArr.forEach((todo) => {
      console.log(todo.name + ", " + todo.id);
    });
  }
}

function addTodos(name, tags) {
  const newTodoObject = {
    id: getId(),
    name: name,
    tags: tags,
    status: STATUS.TODO,
  };
  todos.push(newTodoObject);

  console.log(name + ` 1개가 추가됐습니다.(id: ${newTodoObject.id})`);

  updateStatusCnt(FLAG.CNT_INCREASE, STATUS.TODO);

  showStatusCnt();
}

function deleteTodos(id) {
  const targetIndex = todos.findIndex((item) => item.id == id);
  if (targetIndex >= 0) {
    const target = todos[targetIndex];
    updateStatusCnt(FLAG.CNT_DECREASE, target.status);

    console.log(target.name + ` 가 목록에서 삭제됐습니다.`);

    todos.splice(targetIndex, 1);

    showStatusCnt();
  } else {
    console.log(ERROR.ID_ERROR);
  }
}

function updateTodos(id, status) {
  if (!checkValidStatus(status)) {
    console.log(ERROR.STATUS_ERROR);
    return;
  }
  const targetIndex = todos.findIndex((item) => item.id == id);
  if (targetIndex >= 0) {
    const target = todos[targetIndex];

    const newObject = {
      ...target,
      status: status,
    };
    todos.splice(targetIndex, 1, newObject);

    updateStatusCnt(FLAG.CNT_DECREASE, target.status);
    updateStatusCnt(FLAG.CNT_INCREASE, status);

    console.log(
      target.name + ` 가 ${newObject.status}으로 상태가 변경됐습니다.`
    );

    showStatusCnt();
  } else {
    console.log(ERROR.ID_ERROR);
  }
}


function checkValidStatus(status) {
  for (let i = 0; i < statusCnt.length; i++) {
    if (statusCnt[i].state === status) {
      return true;
    }
  }
  return false;
}

function updateStatusCnt(flag, status) {
  if (flag === FLAG.CNT_INCREASE) {
    const index = statusCnt.findIndex((item) => item.state === status);
    statusCnt[index].cnt++;
  } else if (flag === FLAG.CNT_DECREASE) {
    const index = statusCnt.findIndex((item) => item.state === status);
    statusCnt[index].cnt--;
  }
}
*/

function checkVaildCommand(commandArr) {
  if (commandArr[0] === COMMAND.SHOW || commandArr[0] === COMMAND.DELETE) {
    if (commandArr.length != 2) {
      console.log(ERROR.COMMAND_ERROR);
      return false;
    }
  } else if (
    commandArr[0] === COMMAND.ADD ||
    commandArr[0] === COMMAND.UPDATE
  ) {
    if (commandArr.length != 3) {
      console.log(ERROR.COMMAND_ERROR);
      return false;
    }
  } else {
    console.log(ERROR.COMMAND_ERROR);
    return false;
  }
  return true;
}

function executeCommand(str) {
  const commandArr = str.split("$");
  if (!checkVaildCommand(commandArr)) {
    return;
  }

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
      console.log(ERROR.COMMAND_ERROR);
      break;
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
//모듈화
//try catch

//ID
//상수화
//naming
//let const
