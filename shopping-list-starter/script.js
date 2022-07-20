let shoppingListItems = ["milk", "eggs", "bread"]

updateItems()

// shoppingListItems.forEach((item) => {
//     console.log(item)
//     let itemElement = document.createElement("li");
//     itemElement.innerText = item;

// // shoppingListItems.appendChild(itemElement)
//     listElement.appendChild(itemElement);
// });

// windows.onload = () =>{



function addItem() {
    let inputField = document.getElementById('new-item-text')
    shoppingListItems.push(inputField.value)
    console.log(shoppingListItems);
    updateItems()

}

function clearItems(){
    // make shoppingListItems empty
    let  = document.getElementById('shoppingListItems').innerHTML = ""

    // run updateItems()
    updateItems()

}



function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingListItems.forEach((item) => {
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    });
}


// let inputField = document.getElementById("new-item-text")

// let newShoppingItem = inputField.value

// let newListItem = document.createElement('li')

// newListItem.innerText = newShoppingItem

// console.log ("New List Item")

//TEACHER NOTES
// function addItem() {
//     /*
//       1. Get the value of the input with the id of new-item-text
//       2. Create a list item with the value
//       3. call appendChild on the shopping list to add the list item
//     */
  
//     // 1. Get the value of the input with the id of new-item-text
//     let inputField = document.getElementById('new-item-text')
  
//     // 2. Create a list item with the value
//     // This is 'pesto'
//     let newShoppingItem = inputField.value
  
//     // This is <li></li>
//     let newListItem = document.createElement('li')
  
//     // This is <li>pesto</li>
//     newListItem.innerText = newShoppingItem
  
//     // 3. call appendChild on the shopping list to add the list item
//     shoppingList.appendChild(newListItem)
//   }