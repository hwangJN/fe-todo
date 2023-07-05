# fe-todo

Node.js console 을 통한 TO-DO LIST 구현

<br/>

## Directory

```
┣ todos.js : 사용자 입력
┣ CheckValid.js : 명령어 유효성 검증
┣ Utils.js : 유틸리티
┣ Command.js : 명령어 실행
┣ Data.js : 데이터
┣ Constant.js : 문자열 상수화
┣ README.md : 설계 명세서
```

## Functional description

### todos.js

- `promptUser` : 사용자로부터 명령을 입력받고 명령어를 수행하는 동작을 반복합니다.

- `executeCommand` : $를 기준으로 사용자의 명령을 자르고 <b>show</b>, <b>add</b>, <b>delete</b>, <b>update</b> 명령어를 수행합니다.

<br/>

### CheckValid.js

- `checkVaildCommand` : 잘못된 명령어를 판단하고 명령어 별로 필요한 인자의 수와 확인합니다.

- `checkValidStatus` : 명령어에 포함된 status가 <b>todo</b>또는 <b>doing</b>또는 <b>done</b>가 맞는지 확인합니다.

- `checkValidId` : 명령어에 포함된 id가 todos에 존재하는 id 인지 확인합니다.

<br/>

### Utils.js

- `getId` : 새로운 id를 생성합니다.

- `showStatusCnt` : 각 status별 현재 상태를 콘솔로 출력합니다.

- `updateStatusCnt`: 원하는 status의 개수를 수정합니다.

<br/>

### Command.js

- `showTodos` : <b>show${status}</b> 형태로 명령어를 입력받아 주어진 status에 해당하는 todos를 콘솔로 출력합니다.
- `addTodos` : <b>add${name}${tags}</b> 형태로 명령어를 입력받아 원하는 name과 tags를 가진 todo를 todos 객체에 추가합니다.
- `deleteTodos` : <b>delete${id}</b> 형태로 명령어를 입력받아 해당 id를 가진 todos 항목을 삭제합니다.
- `updateTodos` : <b>update${id}${status}</b> 형태로 명령어를 입력받아 해당 id를 가진 todos 항목의 status를 업데이트합니다.

<br/>

## Data Structure

### Data.js

- `todos` : <b>name</b>, <b>tags</b>, <b>status</b>, <b>id</b> 값을 가진 todo 리스트 객체

- `Id` : 새로운 id 생성을 위한 id 객체
- `statusCnt` : 각 status별 개수를 저장하는 객체
