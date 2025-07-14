const inputArea=document.getElementById('inputSide');
const button=document.getElementById('btn');
const todoList=document.getElementById('to-do-li');

let editTodo=null;


const addTodo =()=>{
  const inputStore=inputArea.value.trim();
  if (inputStore.length<=0){
    alert("You must write something in your to do ");

    // !if nothing write the next function will not applied
    return false;  
  }
  //  ! edit and remove btn function
  
  if(button.innerText === "Edit"){
    editTodo.target.previousElementSibling.innerHTML=inputStore;
    button.innerText="Add"
    inputArea.value="";
     editTodo = null;
  }
  
  else{
  // !  li items appeared
  const li=document.createElement('li');  
  const p=document.createElement('p');
  
  p.innerHTML=inputStore;
  li.appendChild(p);

  todoList.appendChild(li);

  // ! li appeared and input field text remove
  inputArea.value="";

  // !Add button added

  const addButton = document.createElement('button');
  addButton.innerText="Edit";
  addButton.classList.add('todoListBtn')   /* //!added class for styling */
  li.appendChild(addButton);

  // !Delete button added

  const delButton = document.createElement('button');
  delButton.innerText="Remove";
  delButton.classList.add('todoListBtn')/* //!added class for styling */
  li.appendChild(delButton);

  todoList.appendChild(li);
  inputArea.value="";
}}

// ! remove and edit button running function
const updateTodo=(e)=>{
  if (e.target.innerHTML==="Remove"){
    todoList.removeChild(e.target.parentElement);
  }

  if(e.target.innerHTML==="Edit"){
    inputArea.value=e.target.previousElementSibling.innerHTML;
    inputArea.focus();
    button.innerText="Edit";
    editTodo=e;

  }
}



// !running the function
button.addEventListener('click',addTodo);

todoList.addEventListener('click',updateTodo);

inputArea.addEventListener("keypress", function(enterPress){
  if(enterPress.key==='Enter'){
    addTodo();
  }
})