// Creating variables from already created html items
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ui');

// Creating completely new variables/items
const li = document.createElement('li');
const deleteButton = document.createElement('button');

// Populating the newly created variables/items
li.textContent = input.value;
deleteButton.textContent = '❌';

//Appending
li.append(deleteButton);
list.append(li);
