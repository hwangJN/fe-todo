const { STATUS } = require("./Const.js");

const Id = {
  next_Id: 3,
  getNextId: () => {
    return Id.next_Id++;
  },
};

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

module.exports = {
  Id: Id,
  todos: todos,
  statusCnt: statusCnt,
};
