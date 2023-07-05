const { STATUS, FLAG } = require("./Const.js");
const { todos } = require("./Data.js");
const { checkValidStatus, checkValidId } = require("./CheckValid.js");
const { getId, updateStatusCnt, showStatusCnt } = require("./Util.js");

function showTodos(status) {
  if (status === "all") {
    showStatusCnt();
  } else {
    try {
      checkValidStatus(status);

      const matchedStatusArr = todos.filter((todo) => todo.status === status);

      console.log(status + "리스트 : 총" + matchedStatusArr.length + "건");

      matchedStatusArr.forEach((todo) => {
        console.log(todo.name + ", " + todo.id);
      });
    } catch (e) {
      console.error(e);
    }
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
  try {
    const targetIndex = checkValidId(id);
    const target = todos[targetIndex];
    updateStatusCnt(FLAG.CNT_DECREASE, target.status);

    console.log(target.name + ` 가 목록에서 삭제됐습니다.`);

    todos.splice(targetIndex, 1);

    showStatusCnt();
  } catch (e) {
    console.error(e);
  }
}

function updateTodos(id, status) {
  try {
    checkValidStatus(status);
    const targetIndex = checkValidId(id);
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
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  showTodos: showTodos,
  addTodos: addTodos,
  deleteTodos: deleteTodos,
  updateTodos: updateTodos,
};
