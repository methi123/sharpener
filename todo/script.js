document.addEventListener('DOMContentLoaded', function () {
    var apiUrl = 'https://crudcrud.com/api/0132ddc45c2347f489b95b0a142a9dd1/todos';

    var ul = document.getElementById('todo-list');
    var form = document.getElementById('todo-form');
  
    function getTodos() {
      return axios.get(apiUrl);
    }
  
    function addTodo() {
      var input = document.getElementById('todo-input').value;
      var description = document.getElementById('todo-desc').value;
  
      if (input !== '' && description !== '') {
        var todoData = {
          title: input,
          description: description
        };
  
        axios.post(apiUrl, todoData)
          .then(function (response) {
            var todo = response.data;
            var li = createTodoElement(todo);
            ul.appendChild(li);
            clearInputFields();
          })
          .catch(function (error) {
            console.error('Error adding todo:', error);
          });
      }
    }
  
    function deleteTodo(id) {
        var deleteUrl = `${apiUrl}/${id}`;
      
        axios
          .delete(deleteUrl)
          .then(function () {
            var li = document.getElementById(`todo-${id}`);
            li.remove();
          })
          .catch(function (error) {
            console.error('Error deleting todo:', error);
          });
      }
      
      
      
  
    function editTodo(id, updatedTitle, updatedDescription) {
        var li = document.getElementById(`todo-${id}`);
        var titleElement = li.querySelector('.todo-title');
        var descriptionElement = li.querySelector('.todo-description');
      
        titleElement.innerText = updatedTitle;
        descriptionElement.innerText = updatedDescription;
      
        var editUrl = `${apiUrl}/${id}`;
        var updatedData = {
          title: updatedTitle,
          description: updatedDescription
        };
      
        axios
          .put(editUrl, updatedData)
          .then(function () {
            console.log('Todo updated successfully');
          })
          .catch(function (error) {
            console.error('Error updating todo:', error);
            // Revert the changes in case of an error
            titleElement.innerText = todo.title;
            descriptionElement.innerText = todo.description;
          });
      }
      
      
      
      
  
      function createTodoElement(todo) {
        var li = document.createElement('li');
        li.setAttribute('id', `todo-${todo.id}`);
      
        var title = document.createElement('span');
        title.classList.add('todo-title');
        title.innerText = todo.title;
      
        var description = document.createElement('span');
        description.classList.add('todo-description');
        description.innerText = todo.description;
      
        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function () {
          deleteTodo(todo._id); // Assuming the `_id` property is used for the todo ID
        });
        
        var editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', function () {
          var updatedTitle = prompt('Enter updated title', todo.title);
          var updatedDescription = prompt('Enter updated description', todo.description);
          if (updatedTitle !== null && updatedDescription !== null) {
            editTodo(todo.id, updatedTitle, updatedDescription);
          }
        });
      
        li.appendChild(title);
        li.appendChild(description);
        li.appendChild(deleteButton);
        li.appendChild(editButton);
      
        return li;
      }
      
  
    function clearInputFields() {
      document.getElementById('todo-input').value = '';
      document.getElementById('todo-desc').value = '';
    }
  
    getTodos()
      .then(function (response) {
        var todos = response.data;
        todos.forEach(function (todo) {
          var li = createTodoElement(todo);
          ul.appendChild(li);
        });
      })
      .catch(function (error) {
        console.error('Error fetching todos:', error);
      });
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      addTodo();
    });
  });
  