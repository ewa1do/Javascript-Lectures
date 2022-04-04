'use strict';

//             making the object inmmutable
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200;
console.log(spendingLimits);

// const getLimit = user => spendingLimits?.[user] ?? 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function :D - No side effects
const addExpense = function (state, limits, value, description, user = 'Jonas') {
  const cleanUser = user.toLowerCase();

  // if (value <= getLimit(cleanUser)) {
  //   return [...state, { value: -value, description, user: cleanUser }];

  //   // budget.push({ value: -value, description, user: cleanUser });
  // }

  return value <= getLimit(limits, cleanUser) 
  ? [...state, { value: -value, description, user: cleanUser }] 
  : state;
  
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕'); 
                              // notice that im returning in the state the return of the first function, because in the original
                              // they won't appear
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// console.log(newBudget3);

// const checkExpenses2 = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user) 
//     ? { ...entry, flag: 'limit' } : entry;
//   });

//   // for (const entry of budget)     
//   // if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
// };

const checkExpenses = (state, limits)  => 
  state.map(entry => 
    entry.value < -getLimit(limits, entry.user) 
    ? { ...entry, flag: 'limit' } : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);


// const logBigExpenses = function (state, limit) {
//   return state.filter(entry => entry.value <= -limit)
//     .map(entry => entry.description.slice(-2)).join(' / ');
//     // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}` ,'');
//   // console.log(bigExpenses);
// };

const logBigExpenses = (state, limit) => 
  state.filter(entry => entry.value <= -limit)
  .map(entry => entry.description.slice(-2))
  .join(' / ');

  // impure
console.log(logBigExpenses(finalBudget, 500));