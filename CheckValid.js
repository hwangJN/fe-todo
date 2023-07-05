const { todos, statusCnt } = require("./Data.js");
const { COMMAND, ERROR } = require("./Const.js");

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
      throw ERROR.COMMAND_ERROR;
    }
  } else {
    throw ERROR.COMMAND_ERROR;
  }
}

function checkValidStatus(status) {
  for (let i = 0; i < statusCnt.length; i++) {
    if (statusCnt[i].state === status) {
      return true;
    }
  }
  throw ERROR.STATUS_ERROR;
}

function checkValidId(id) {
  const targetIndex = todos.findIndex((item) => item.id == id);
  if (targetIndex < 0) {
    throw ERROR.ID_ERROR;
  }
  return targetIndex;
}

module.exports = {
  checkVaildCommand: checkVaildCommand,
  checkValidStatus: checkValidStatus,
  checkValidId: checkValidId,
};
