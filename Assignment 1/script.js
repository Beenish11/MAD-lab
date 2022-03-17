const classNames = {
    TODO_ITEM: "todo-container",
    TODO_CHECKBOX: "todo-checkbox",
    TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
    TODO_TEMPLATE: `<li >
    <input type="checkbox" class="todo-checkbox" onclick="check(this)">
    <span class="flow-right" id="new_todo">new item</span>
  </li>`
  };
var todos = 0;

  const list = document.getElementById("todo-list");
  const itemCountSpan = document.getElementById("item-count");
  const uncheckedCountSpan = document.getElementById("unchecked-count");
  
function newTodo() {
    todos = todos+1
    /*Add Logic for creating a new Todo Item. */
    list.innerHTML += classNames.TODO_TEMPLATE
    var text = document.getElementById("new_todo");
    text.innerHTML = document.getElementById("todo-text").value;
    document.getElementById("todo-text").value = '';
    text.setAttribute('id', `${todos}`)
    /*Below lines can be used to updated the data on frontend */
    // list.innerHTML = "New Item ";
    itemCountSpan.innerHTML = `${todos}`
    var count = document.getElementsByClassName("selected").length
    uncheckedCountSpan.innerHTML = `${todos - count}`;
  }
  function check(elem) {
    if (elem.checked == true){
      console.log("checked")
      elem.parentElement.classList.add("selected");
      // uncheckedCountSpan.innerHTML = toin;
    } else {
      console.log("unchecked");
      elem.parentElement.classList.remove("selected");
    }
    
    var count = document.getElementsByClassName("selected").length;
    console.log(count)
    uncheckedCountSpan.innerHTML = `${todos - count}`;

  }
  function removeTodo() {
    const elems = document.getElementsByClassName("selected");
    console.log(elems.length)
    for (let index = 0; index < elems.length; index++) {
      var element = elems[index];
      element.remove();
      todos = todos - 1;
      removeTodo()
    }
    itemCountSpan.innerHTML = `${todos}`;
    uncheckedCountSpan.innerHTML = `${todos}`;
  }