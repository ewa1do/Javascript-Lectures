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

### API: 

**A**pplication **P**rogramming **I**nterface: Piece of software 
that can be used by another piece of software, in order to allow
**applications to talk to each other**.

**"Online" API:** Application running on a server, that receives request
for data, and sends data back as a response.

We can build or own web APIs (requires back-end development, e.g with 
node.js) or use a **3rd-party** APIs.


![What happens when we access a Web Server](https://github.com/ewa1do/Javascript-Lectures/blob/main/16%20-%20Asynchronous%20Javascript/img/notes1.png)

### Promise

**Promise:** An object that is used as a placeholder for the future result of and asynchronous operation.

*Less formal* :arrow_down:.
**Promise:** A container for an asynchronously delivered true.

*Less formal* :arrow_down:.
**Promise:** A container for a future value. 
*Example:* Response from AJAX call :exclamation:


![The promise Lifecycle](https://github.com/ewa1do/Javascript-Lectures/blob/main/16%20-%20Asynchronous%20Javascript/img/notes2.png)