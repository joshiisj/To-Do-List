
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", addTask);
  
    function addTask() {
      if(taskInput.value==0)
      {
        alert("Please Write Something!")
      }
      else{
        let li= document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "\u00d7";
        li.appendChild(deleteButton);
  
      }
        taskInput.value = "";
      }
      
  taskList.addEventListener("click", function(a){
    if(a.target.tagName === "LI"){
      a.target.classList.toggle("task-item");
    }
    else if(a.target.tagName === "BUTTON"){
      a.target.parentElement.remove();
    }
  },false);   
      
     