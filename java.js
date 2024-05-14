
function addTask() {
    var taskInput = document.getElementById("event");
    var taskText = taskInput.value;
    
    if(taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    var done=document.createElement("button");
    done.className="tick";
    done.style.height="30px";
    done.style.width="30px";
    done.style.backgroundColor="black";
    var taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.style.backgroundColor="#a663cc";
    taskDiv.style.height="40px";
    taskDiv.style.width="430px";
    taskDiv.style.color="white";
    taskDiv.style.display="flex";
    taskDiv.style.flexDirection="row";
    taskDiv.style.alignItems="center";
    taskDiv.style.justifyContent="space-between";
    taskDiv.style.margin="10px";
    taskDiv.appendChild(done);
    var taskTextNode = document.createTextNode(taskText);
    taskDiv.appendChild(taskTextNode);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.onclick = function() {
        taskDiv.remove();
    };
    taskDiv.appendChild(deleteButton);
    deleteButton.style.height="40px";
    deleteButton.style.width="30px";
    document.getElementById("todoList").appendChild(taskDiv);
    
    taskInput.value = "";
}

var box= document.getElementById("box");
var mode= document.getElementById("mode");

mode.addEventListener("click", function() {
    var currentColor = box.style.backgroundColor;
    if (currentColor === "white") {
        box.style.backgroundColor = "black";
    } else {
        box.style.backgroundColor = "white";
    }
});

const divcontent=document.getElementById("box").innerHTML;
localStorage.setItem('savedDivContent',divcontent);

const savedDivContent=localStorage.getItem('savedDivContent');