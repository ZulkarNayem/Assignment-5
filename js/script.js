// navbar button color change code
// -------------------------------
function randomColor() {
    const letters = 'CDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

document.getElementById('theme-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = randomColor();
});


// real time date codes
// --------------------
function dateUpdate() {
    const now = new Date();
    const date = now.toDateString();
    document.getElementById('date').textContent = date;
}

setInterval(dateUpdate, 1000);
dateUpdate();

function updateDate() {
    const now = new Date();
    const date = now.toDateString();
    document.getElementById('date').textContent = date;
}

function dateUpdate() {
    const now = new Date();
    const date = now.toDateString();
    document.getElementById('date').textContent = date;
}


// open alert and disable button
// -----------------------------
let tasksCompleted = 0;

function showAlertAndDisable(buttonId, taskTitle) {
    
    alert("Task Completed!");

    const button = document.getElementById(buttonId);
    button.disabled = true;
    button.classList.add("bg-gray-400");

    tasksCompleted++;

    logTaskCompletion(taskTitle);
}

    function updateTaskCounts() {
        const taskAssignedElement = document.querySelector('.bg-blue-50 .text-xl');
        let taskAssignedCount = parseInt(taskAssignedElement.textContent);
        taskAssignedCount -= 1;
        taskAssignedElement.textContent = taskAssignedCount;

        // const navbarCountElement = document.querySelector('.bg-blue-50 .font-bold');
        // let navbarCount = parseInt(navbarCountElement.textContent);
        // navbarCount += 1;
        // navbarCountElement.textContent = navbarCount;
    }

    function showAlertAndDisable(buttonId, taskTitle) {
        alert("Task Completed!");

        const button = document.getElementById(buttonId);
        button.disabled = true;
        button.classList.add("bg-gray-400");

        tasksCompleted++;

        logTaskCompletion(taskTitle);

        updateTaskCounts();
    }

    function logTaskCompletion(taskTitle) {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const taskMessage = `You have completed the task ${taskTitle} at ${timeString}`;

        const logItem = document.createElement("li");
        logItem.textContent = taskMessage;

        document.getElementById("log").appendChild(logItem);

        if (tasksCompleted === 6) {
            alert("All tasks completed!");
        }
    }

    document.getElementById('complete-btn-1').addEventListener('click', function() {
        showAlertAndDisable('complete-btn-1', 'Fix Mobile Button Issue');
    });

    document.getElementById('complete-btn-2').addEventListener('click', function() {
        showAlertAndDisable('complete-btn-2', 'Add Dark Mode');
    });

    document.getElementById('complete-btn-3').addEventListener('click', function() {
        showAlertAndDisable('complete-btn-3', 'Optimize Home Page');
    });

    document.getElementById('complete-btn-4').addEventListener('click', function() {
        showAlertAndDisable('complete-btn-4', 'Add New Emoji');
    });

    document.getElementById('complete-btn-5').addEventListener('click', function() {
        showAlertAndDisable('complete-btn-5', 'Integrate OpenAI API');
    });

    document.getElementById('complete-btn-6').addEventListener('click', function() {
        showAlertAndDisable('complete-btn-6', 'Improve Job Searching');
    });

    // clear history 
    // --------------
    document.getElementById('clear-history-btn').addEventListener('click', function() {
        
        const logList = document.getElementById('log');

        logList.innerHTML = '';
    });