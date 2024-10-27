// JavaScript for Stack and Queue simulation
let stack = [];
let queue = [];

// Push Function for Stack
function push() {
    const inputValue = document.getElementById('inputValue').value;
    if (inputValue === '') return alert("Please enter a value");
    
    stack.push(inputValue);
    document.getElementById('inputValue').value = '';
    renderStack();
}

// Pop Function for Stack
function pop() {
    if (stack.length === 0) return alert("Stack is empty");
    
    stack.pop();
    renderStack();
}

// Enqueue Function for Queue
function enqueue() {
    const inputValue = document.getElementById('inputValue').value;
    if (inputValue === '') return alert("Please enter a value");
    
    queue.push(inputValue);
    document.getElementById('inputValue').value = '';
    renderQueue();
}

// Dequeue Function for Queue
function dequeue() {
    if (queue.length === 0) return alert("Queue is empty");
    
    queue.shift();
    renderQueue();
}

// Render Stack Visualization
function renderStack() {
    const stackContainer = document.getElementById('stackContainer');
    stackContainer.innerHTML = '';
    stack.forEach(item => {
        const div = document.createElement('div');
        div.className = 'box';
        div.textContent = item;
        stackContainer.appendChild(div);
    });
}

// Render Queue Visualization
function renderQueue() {
    const queueContainer = document.getElementById('queueContainer');
    queueContainer.innerHTML = '';
    queue.forEach(item => {
        const div = document.createElement('div');
        div.className = 'box';
        div.textContent = item;
        queueContainer.appendChild(div);
    });
}
