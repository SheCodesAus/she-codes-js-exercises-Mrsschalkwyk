function addTask() {}

function updateTodoList() {}

function createNewTodoItemElement(todoItem, index) {}

function toggleComplete(index) {}

let todoTasksText = ["Walk Chilli", "Make Dinner"];
let todoList = document.getElementById('todo-list')

for (let i = 0; i < todoTasksText.length; i++) {
  // Create: <p>Walk Chilli</p>
  let newTask = document.createElement('p')
  newTask.innerText = todoTasksText[i];

  // Append: <p>Walk Chilli</p>
  let newListItem = document.createElement("li");
  newListItem.appendChild(newTask);
  // <li><p>Walk Chilli</p></li>

  // Append List Item to Unordered List:
  /*
    <ul>
      <li>
        <p>Walk Chilli</p>
      </li>
    </ul>
  */
  todoList.appendChild(newListItem);
}