const { STATUS, ERROR, FLAG } = require("./Const.js");

const todos = [
  {
    name: "자바스크립트 공부하기",
    tags: ["programming", "javascript"],
    status: "todo",
    id: 1,
  },
  {
    name: "그림 그리기",
    tags: ["picture", "favorite"],
    status: "doing",
    id: 2,
  },
];

const statusCnt = [
  { state: STATUS.TODO, cnt: 1 },
  { state: STATUS.DOING, cnt: 1 },
  { state: STATUS.DONE, cnt: 0 },
]; // todo, doing, done
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

module.exports = {
  showTodos: showTodos,
  addTodos: addTodos,
  deleteTodos: deleteTodos,
  updateTodos: updateTodos,
};
