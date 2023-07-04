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

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let counts = [
  { name: "todo", cnt: 1 },
  { name: "doing", cnt: 1 },
  { name: "done", cnt: 0 },
]; // todo, doing, done

function showCount() {
  let str2 = "현재상태 : ";
  counts.forEach((status) => {
    str2 += status.name + " : " + status.cnt + "개, ";
  });
  console.log(str2.slice(0, -2));
}

function showTodos(str) {
  //all or todo or doing or done
  if (str === "all") {
    showCount();
  } else {
    let temp = todos.filter((todo) => todo.status === str);
    console.log(str + "리스트 : 총" + temp.length + "건");
    temp.forEach((todo) => {
      console.log(todo.name + ", " + todo.id);
    });
  }
}

function addTodos(name, tags) {
  const newObject = {
    id: todos.length + 1,
    name: name,
    tags: tags,
    status: "todo",
  };
  todos.push(newObject);
  console.log(name + ` 1개가 추가됐습니다.(id: ${todos.length})`);
  const index = counts.findIndex((item) => item.name === "todo");
  counts[index].cnt++;
  showCount();
}

function deleteTodos(id) {
  const target = todos.find((item) => item.id == id);
  const targetIndex = todos.findIndex((item) => item.id == id);
  const index = counts.findIndex((item) => item.name === target.status);
  counts[index].cnt--;
  console.log(target.name + ` 가 목록에서 삭제됐습니다.`);
  todos.splice(targetIndex, 1);
  showCount();
}

function updateTodos(id, status) {
  const target = todos.find((item) => item.id == id);
  const targetIndex = todos.findIndex((item) => item.id == id);
  const newObject = {
    ...target,
    status: status,
  };
  todos.splice(targetIndex, 1, newObject);

  let index = counts.findIndex((item) => item.name === target.status);
  counts[index].cnt--;
  index = counts.findIndex((item) => item.name === status);
  counts[index].cnt++;

  console.log(target.name + ` 가 ${newObject.status}으로 상태가 변경됐습니다.`);
  showCount();
}

function parsingWord(str) {
  let command = str.split("$");

  switch (command[0]) {
    case "show": //show${status}
      showTodos(command[1]);
      break;
    case "add": //add${name}${tags}
      addTodos(command[1], command[2]);
      break;
    case "delete": //delete${ID}
      deleteTodos(command[1]);
      break;
    case "update": //update${ID}${status}
      updateTodos(command[1], command[2]);
      break;
    default:
      break;
  }
}

function promptUser() {
  rl.question("명령하세요 : ", (command) => {
    parsingWord(command);
    promptUser();
  });
}

promptUser();
