document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newTodoText = todoInput.value.trim();
        if (newTodoText !== '') {
            const li = document.createElement('li');
            li.textContent = newTodoText;

            li.addEventListener('click', function() {
                li.classList.toggle('completed');
            });

            todoList.appendChild(li);
            todoInput.value = '';
        }
    });
});
