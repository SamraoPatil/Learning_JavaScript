// when objects is made from constructors thenthey are singletons..

// object literals..

// this method is called making of object through constructor..
// Object.create

const user = {
  name: "Rohan",
  age: 23,
  location: "maharashtra",
  email: "rohan.google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Wednesday"],
};

//console.log(user);
//console.log(user["lastLoginDays"]);

//console.log("++++++++++++++++++++++++++++++++++");

// interview question
// using symbol in objects

const symb = Symbol("key1");
const user2 = {
  name: "hitesh",
  age: 23,
  [symb]: "mykey1",
};
//console.log(user2[symb]);

user.email = "rohanchatgpt@gmail.com";

//Object.freeze(user); // this will freeze our object and will not allow any changes to mke.

//console.log(user);
//console.log(user2);

user.greeting = function () {
  console.log("hello JS user");
};

user.greeting();

user.greeting2 = function () {
  console.log(`Hello ${this.name}, JS user`);
};

user.greeting2();


