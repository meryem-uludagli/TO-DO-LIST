document.getElementById("addButton").addEventListener("click", function() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;

        document.getElementById("taskList").appendChild(li);

        taskInput.value = ""; // Girdi alanını temizle
    } else {
        alert("Please enter a task.");
    }
});