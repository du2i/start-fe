// console.log('app');

// // var arr = [1, 2, 3];

// // // new Array() 비권장( 모호하다)
// // var arr = new Array(1, 2, 3); // [1,2,3]
// // var arr = new Array(3); // []  // [], arr.lenght=3
// // console.log(arr.length); //3

// // for (var i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// //create
// var todos = ['운동']
// var todo = '게임';
// todos.push(todo);
// console.log(todos);


// // read
// todos.forEach(function(todo){
//     console.log(todo);
// });

// var arr = [1,2];
// arr[1]=3;
// //arr =1,3

// //update
// // var todos = ['운동', '게임'];
// // var updateTodo = '게임';
// // var updateIndex = todos.findIndex(function(todo) {
// //   return todo === updateTodo;
// // });

// // todos[updateIndex] = '공부';
// // console.log(todos);

// var todos = ['운동', '게임'];
// var updateTodo = '게임';

// var newTodos = todos.map(function(todo) {
//   if (todo === updateTodo) {
//     return '공부';
//   }
//   return todo;
// });

// console.log(newTodos);

// //delete

// var isMan = true;
// if(isMan){
//     console.log('1');

// }

// else if(isMan && isHero){

// }
// else{
//     console.log('2');
// }

for (var count = 0; count < 5; count++) {
    //총 5번 실행
  }
  
  var obj = { a: 1, b: 2 };
  
  //느리다.비권장
  for (var prop in obj) {
    console.log(prop, obj[prop]);
  }

  