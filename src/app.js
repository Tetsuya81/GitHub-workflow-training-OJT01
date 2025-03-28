document.addEventListener('DOMContentLoaded', () => {
    const newTodoInput = document.getElementById('new-todo');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    
    // TODOアイテムを追加する関数
    function addTodo() {
      const todoText = newTodoInput.value.trim();
      
      if (todoText === '') return;
      
      const todoItem = document.createElement('li');
      todoItem.className = 'todo-item';
      
      const todoSpan = document.createElement('span');
      todoSpan.textContent = todoText;
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';
      deleteButton.addEventListener('click', function() {
        todoList.removeChild(todoItem);
      });
      
      todoItem.appendChild(todoSpan);
      todoItem.appendChild(deleteButton);
      todoList.appendChild(todoItem);
      
      newTodoInput.value = '';
      newTodoInput.focus();
    }
    
    // 「追加」ボタンのクリックイベント
    addButton.addEventListener('click', addTodo);
    
    // 入力フィールドでEnterキーが押された時
    newTodoInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTodo();
      }
    });
  });