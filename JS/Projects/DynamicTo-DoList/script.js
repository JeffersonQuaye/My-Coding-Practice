const todoItem = document.getElementById('todoItem');
const addItem = document.getElementById('addItem');
const todoList = document.getElementById('todoList');

addItem.addEventListener('click', function () {
    const newTodo = todoItem.value;

    if (newTodo !== '') {
        const todoItem = document.createElement('li')
        todoItem.innerText = newTodo;

        const delTodoBtn = document.createElement('button');
        delTodoBtn.innerText = 'x';

        delTodoBtn.classList.add('delete-todo-btn');
        delTodoBtn.addEventListener('click', function(){
            todoItem.remove();
        })

        todoItem.appendChild(delTodoBtn);
        todoList.appendChild(todoItem);
        todoItem.value = "";
    }
})