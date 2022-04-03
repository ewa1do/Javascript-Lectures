## Review: Modern and Clean Code

### Readable Code 
- Write code so that **others** can understand **it**
- Write code so that **you** can understand it in 1 year
- Avoid too "clever" and overcomplicated solutions
- Use descriptive variable names: **what they contain** 
- Use descriptive function names: **what they do** 

### General 
- Use DRY principle (refactor your code)
- Don't pollute global namespaces, encapsulate instead
- Don't use var
- Use strong type checks (=== and !==)

### Functions
- Generally, functions should do **only one thing**
- Don't use more than 3 functions parameters
- Use default parameters whenever possible
- Generally, return same data type as received
- Use arrow functions when they make code more readable

### OOP
- Use ES6 classes
- Encapsulate data and **don't mutate** it from outside the class
- Implement method chaining
- Do **not** use arrow functions as methods (in regular objects)

### Avoid Nested Code
- Use early **return** (guard clause)
- Use ternary (conditional) or logical operators instead of **if**
- Use multiple **if** instead of **if/else-if**
- Avoid **for** loops, use array methods instead
- Avoid callback-based asynchronous APIs

### Asynchronous Code 
- Consume promises with async/await for best readability
- Whenever possible, run promises in **parallel (Promise.all)**
- Handle errors and promise rejections

![screnshot 6](https://github.com/ewa1do/Javascript-Lectures/blob/main/17%20-%20Modern%20Javascript%20Development/screenshots/screen6.png)
![screnshot 5](https://github.com/ewa1do/Javascript-Lectures/blob/main/17%20-%20Modern%20Javascript%20Development/screenshots/screen5.png)

![screnshot 1](https://github.com/ewa1do/Javascript-Lectures/blob/main/17%20-%20Modern%20Javascript%20Development/screenshots/screen1.png)

![screnshot 2](https://github.com/ewa1do/Javascript-Lectures/blob/main/17%20-%20Modern%20Javascript%20Development/screenshots/screen2.png)

![screnshot 3](https://github.com/ewa1do/Javascript-Lectures/blob/main/17%20-%20Modern%20Javascript%20Development/screenshots/screen3.png)

![screnshot 4](https://github.com/ewa1do/Javascript-Lectures/blob/main/17%20-%20Modern%20Javascript%20Development/screenshots/screen4.png)
