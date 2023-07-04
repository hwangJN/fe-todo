const STATUS = {
  TODO: "todo",
  DOING: "doing",
  DONE: "done",
};

const COMMAND = {
  SHOW: "show",
  ADD: "add",
  DELETE: "delete",
  UPDATE: "update",
};

const ERROR = {
  COMMAND_ERROR: "Error : Not Valid Command",
  ID_ERROR: "Error : Not Valid ID",
  STATUS_ERROR: "Error : Not Valid Status",
};

const FLAG = {
  CNT_INCREASE: true,
  CNT_DECREASE: false,
};

module.exports = {
  STATUS: STATUS,
  COMMAND: COMMAND,
  ERROR: ERROR,
  FLAG: FLAG,
};
