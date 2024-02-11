'use strict'

//方法１
// //todoApp 関数：ToSoアプリケーションのメインロジックを定義する関数
// const todoApp=()=>{
//     //Todoを格納するための配列
//     const todos=[];
//     //HTML側の各要素を取得する
//     const todoInput=document.querySelector('#todoInput');
//     const addTodoBtn=document.querySelector('#addTodoBtn');
//     const todoList=document.querySelector('#todoList');

//     //Todoリストを画面に表示する
//     const renderTodos=()=>{
//     const todoItems=todos.map((todo)=>
//     `<li style='text-decoration:${todo.completed ? 'line-through':'none'}'>
//     ${todo.text}
//     </li>`
//     ).join("");
//     todoList.innerHTML=todoItems;

//     //li要素にクリックイベントを追加する
//     const todoItemsElements= todoList.querySelectorAll('li');
//     todoItemsElements.forEach((item,index)=>{
//         item.addEventListener('click',()=>{
//         toggleTodo(index);
//      });
//   });
// };

    // //新しいTodoを追加するための関数を作成
    // const addTodo=(text)=>{ 
    //     //変数textには、todoTextの内容をが格納されている
    //     todos.push({text,completed:false});
    //     renderTodos();
    // };

    // //クリックした要素を完了状態に切り替え、画面を更新する関数
    // const toggleTodo=(index)=>{
    // todos[index].completed=!todos[index].completed;
    //     renderTodos();
    // };

//     //addTodoBtnをクリックしたら入力値が空でない場合は、配列todosにデータを格納する
//     addTodoBtn.addEventListener('click',()=>{
//         const todoText=todoInput.value;
//         console.log(todoText);
//         if(todoText != ''){ //変数todoTextが　''　(空)ではない時
//             addTodo(todoText);
//             todoInput.value='';//入力フォームの初期化
//         }
//     });
//     //addTodo関数とtoggleTogo関数を外部からアクセス可能にする(クロージャ)
// return{
//     addTodo,toggleTodo
// };
// };
// //ページロードされた時に実行される処理
// document.addEventListener('DOMContentLoaded',()=>{
//     //todoApp関数を実行
//     const {toggleTodo}=todoApp();
// });



//方法２
//     //HTML側の各要素を取得する
    const todoInput=document.querySelector('#todoInput');
    const btn=document.querySelector('#addTodoBtn');
    const todoList=document.querySelector('#todoList');

    const todos=[];

    btn.addEventListener('click',()=>{
        const task = todoInput.value;
        addTodo(task);
        console.log(task);
        todoInput.value="";
});
const renderTask=()=>{
    const listItems=todos.map((task)=>
    `<li style='text-decoration:${task.completed ? 'line-through' : 'none'}'>
        ${task.text}
        </li>`
        ).join("");
        todoList.innerHTML = listItems;
        const todoItemsElements = todoList.querySelectorAll('li');
        todoItemsElements.forEach((item, index) => {
            item.addEventListener('click', () => {
                toggleTodo(index);
            });
        });
    

};

const addTodo = (text) => {
    todos.push({ text, completed: false });
    renderTask();
};

const toggleTodo = (index) => {
    todos[index].completed = !todos[index].completed;
    renderTask();
};


        //1.文字列をHTMLタグおを持つ文字列に編集する
          // const taskItem=`<li>${task}</li>` ←これを編集する
        //2.編集した文字列をreturnする
        //3.新たに作られや配列の情報をHTMLに渡して表示させる
        //4.打消し線の処理を実行する関数を作る
        //5.クロージャを使って処理を実行する
        //6.4打消し線の処理を実行する
 




