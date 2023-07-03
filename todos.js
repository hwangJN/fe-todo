const todos =  [ 
{
	'name' : '자바스크립트 공부하기', 
	'tags' : ['programming', 'javascript'],
	'status' : 'todo',
	'id' : 12123123,
},
				{
	'name' : ' 그림 그리기', 
	'tags' : ['picture', 'favorite'],
	'status' : 'doing',
	'id' : 312323,
}]

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showTodos(str){
    console.log("show");
}

function addTodos(name, tags) {
    console.log("add");
};

function deleteTodos(id) {
    console.log("del");
};

function updateTodos(id, status) {
    console.log("update");
};

function parsingWord(str){
    let command = str.split("$");

    switch(command[0]){
        case "show":
            showTodos(command[1]);
            break;
        case "add":
            addTodos(command[1], command[2]);
            break;
        case "delete":
            deleteTodos(command[1]);
            break;
        case "update":
            updateTodos(command[1], command[2]);
             break;
        default:
            break;
    }


}


function promptUser() {
   
    rl.question('명령하세요 : ', (command) => {
        parsingWord(command);
        promptUser();
    });
}

promptUser();
