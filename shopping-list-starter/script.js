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
    let  = document.getElementById('shoppingListItems')

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