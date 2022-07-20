let todoTasksText = [];
let todoTasksStatus = [];

updateTodoList();

function addTask() {
	// Get the element <input id="new-task-text" type="text" placeholder="Todo task" />

	let newTask = document.getElementById("new-task-text");

	// If the field isn't empty (it has a value)
	if (newTask.value) {
		// Add the text to the global list (at the top of the file!)
		todoTasksText.push(newTask.value);

		// Give it the status of false (the task isn't done yet!)
		todoTasksStatus.push(false);

		// Reset the input to be blank
		newTask.value = "";
		console.log(todoTasksText);
		updateTodoList();
	}
}

function updateTodoList() {
	// Get this element <ul id="todo-list"></ul> and call it todoList
	let todoList = document.getElementById("todo-list");
	todoList.innerHTML = "";
	// Get the list of tasks. And do the function once for each task.
	todoTasksText.forEach((task, index) => {
		let newTodoTaskElement = createNewTodoItemElement(task, index);
		todoList.appendChild(newTodoTaskElement);
	});
}

function createNewTodoItemElement(task, index) {
	// Create a 'p' tag called newTodoTaskTextElement
	let newTodoTaskTextElement = document.createElement("p");

	// Inside the 'p' tag add the task text.
	newTodoTaskTextElement.innerText = task;

	if (todoTasksStatus[index] == true) {
		newTodoTaskTextElement.classList.add("complete");
	}

	// Create an 'li' element
	let newTodoTaskElement = document.createElement("li");

	// Put the 'p' element in the 'li' element
	newTodoTaskElement.appendChild(newTodoTaskTextElement);

	// Create a input with the type of button and a value of completed
	let completeButtonElement = document.createElement("input");
	completeButtonElement.type = "button";
	completeButtonElement.value = "Completed";

	// When the button is clicked do the toggleComplete function with the index of the task.
	// The index is where in the list the task appears, starting at 0.
	// E.g. The first item in the list has an index of 0, the next 1, the next 2, and so on.
	completeButtonElement.onclick = function () {
		toggleComplete(index);
	};

	// Add it to the end of the todo Task
	newTodoTaskElement.appendChild(completeButtonElement);

	// We now have <li><p>{the task}</p><input type="button" value="Completed"></input></li>
	// Put the whole thing inside the todoList
	return newTodoTaskElement;
}

function toggleComplete(index) {
	if (todoTasksStatus[index] == false) {
		todoTasksStatus[index] = true;
	} else {
		todoTasksStatus[index] = false;
	}
	updateTodoList();
}

// let todoTaskText=[];
// let todoTaskStatus = [];

// updateTodoList();
// function addTask();{ 
// // Get the element <input id="new-task-text" type="text" placeholder="Todo task"/>

//         let newTask = document.getElementById("new-task-text");

//         // If the field isnt empty(has a value)
//           if (newTask.value) {
//           //Add the text to the global list(at the top of the file)
//           todoTaskText.push(newTask.value);
        
//           //Give the status of false 
//           todoTaskStatus.push(false);

//           //reset the input to the blank
//           newTask.value = "";
//           console.log(todoTaskText);
//           updateTodoList();
//         }

//   }

// function updateTodoList() {
//     //Get this element <ul id="todo-list></ul>" and call it todoList
//     let todoList = document.getElementById("todo-list");
//     todoList.innerHTML =""
//     //Get the list of tasks and do the function of each task
//     todoTaskText.forEach((task,index) => {
//       let newTodoTaskElement = createNewTodoItemElement(task, index);
//       todoList.appendChild(newTodoTaskElement);
//     });
//   }
// function createNewTodoItemElement(task, index) {
//     //create a "p" tag called newTodoTaskTextElement
//     let newTodoTaskTextElement = document.createElement("p");

//     //inside the "p" tag add the task text
//     newTodoTaskTextElement.innerText - task;

//     if (todoTaskStatus[index] ==true ){
//         newTodoTaskTextElement.classList.add("complete");
//     }

//     let newTodoTaskElement = document.createElement("li");

//     //put the "p" element in the "li" elemnt
//     newTodoTaskElement.appendChild(newTodoTaskTextElement);

//     //Create a input with the type of buttonand a value of completed
//     let completedButtonElement = document.createElement("input");
//     completedButtonElement.type = "button";
//     completedButtonElement.value = "completed";

//     //When the button is clicked do the toggleComplete function with the index of the
//     //task
//     //The index is where in the list the task appears, starting at 0.
//     completedButtonElement.onclick = function(){
//     toggleComplete(index);
//   };

//   // Add it to the end of the todo list task
//   newTodoTaskElement.appendChild(completedButtonElement);

// 	// We now have <li><p>{the task}</p><input type="button" value="Completed"></input></li>
//   	// Put the whole thing inside the todoList
//     return newTodoTaskElement;


// }

// function toggleComplete(index){
//   if (todoTaskStatus[index] ==false){
//     todoTaskStatus[index] = true;

//   } else {
//     todoTaskStatus[index] = false;
//   }
//   updateTodoList();

// }

// for (let i = 0; i < todoTasksText.length; i++) {
//   // Create: <p>Walk Chilli</p>
//   let newTask = document.createElement('p')
//   newTask.innerText = todoTasksText[i];

//   // Append: <p>Walk Chilli</p>
//   let newListItem = document.createElement("li");
//   newListItem.appendChild(newTask);
  // <li><p>Walk Chilli</p></li>

  // Append List Item to Unordered List:
  /*
    <ul>
      <li>
        <p>Walk Chilli</p>
      </li>
    </ul>
  */
//   todoList.appendChild(newListItem);
// }

// Event function and class
// 
// ::before style ::after
