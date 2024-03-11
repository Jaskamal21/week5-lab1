const array = [1, 2, 3, 4, 5];
const map = array.map(function(x)
    {return x * 3});
console.log(map);


const alpha = ["apple", "grapes", "pineapple", "ananas"];
const length = alpha.map(function(x)
    {return x.length});
console.log(length);

const num = [3, 5, 7, 9, 6]
const square = num.map(function(x)
    {return x ** 2});
console.log(square);

const degree_c = [0, 10, 20, 30, 40];
const degree_f = degree_c.map(function(x)
    {return(x * 9/2) + 32});
console.log(degree_f);

const fruit = ["apple", "cheery", "grapes"];
const uppercase = fruit.map(function(x)
    {return x.toUpperCase()});
console.log(uppercase);