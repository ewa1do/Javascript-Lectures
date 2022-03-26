# Reference Concepts:

### Synchronous Code:

- Most code is **synchronous**
- Synchronous code is **executed line by line**
- Each line of code **waits** for previous line to finish
- <mark>Long-running operations **block** code execution :warning:</mark>

### Asynchronous Code: 

- Asynchronous code is executed **after a task that runs in the "background" finishes**
- Asynchronouys code is **non-blocking** :+1:
- Execution doesn't wait for an asynchronous taks to finish its work
- Callback functions alone do **NOT** make code asynchronous