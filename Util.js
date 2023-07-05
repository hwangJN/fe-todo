const { Id, statusCnt } = require("./Data.js");
const { FLAG } = require("./Const.js");

function getId() {
  return Id.getNextId();
}

function showStatusCnt() {
  let outputStr = "현재상태 : ";

  statusCnt.forEach((status) => {
    outputStr += status.state + " : " + status.cnt + "개, ";
  });

  console.log(outputStr.slice(0, -2));
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

module.exports = {
  getId: getId,
  showStatusCnt: showStatusCnt,
  updateStatusCnt: updateStatusCnt,
};
