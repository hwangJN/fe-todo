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

function showTodos(todos){
    console.log();
}


function promptUser() {
    let input;
    rl.question('명령하세요 : ', (command) => {
        input = command;
        //console.log(`현재상태 : ${input}`);
        showTodos();
        promptUser();
    });
}

promptUser();
