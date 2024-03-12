// Previously before Promises were introduced, developers used to use Async Await to caary out functions, later two Libraries were introduced i.e Q and Blue-bird which were kind of older versions of Promises
// Developers used to love it a lot, so node js made some modifications into it, and said now we have Promises to use we dont have to import these Libraries o do our work.

const promiseOne = new Promise(function (resolve, reject) {
  // Do an Async-Task like:
  //     DB calls, Cryptography, Network Calss, file-Read;

  setTimeout(function () {
    console.log("Async Task Is Complete");
    resolve(); // when we call here resolve tabhi our .then gets connected with resolve and our Promise will be consumed.
  }, 1000);
});

// consuming  a promise:
// .then connection is with resolve:

promiseOne.then(function () {
  console.log("Promise Consumed");
});

// One more way of writing Promises:

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async-Task Two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async-Task 2 Completed , Promise Consume");
});

//Promise Three:
// Case when we have data coming from external DB source :

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chaicode@example.com" }); //  at this time we will handle all our data in resolve, mostly coming in the form of Objects:
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// Fourth Promise:
// Reject-Resolve Promise:

const promiseFourth = new Promise(function (resolve, reject) {
  setTimeout(function () {
    error = true;
    //error = false;
    if (!error) {
      resolve({ username: "Rohan", password: "1234" });
    } else {
      reject("Error: Something Went Wrong");
    }
  }, 1000);
});

// Chaining of then and catch to take the return value from one then and using it in another then

promiseFourth
  .then((user) => {
    console.log(user);
    return user["username"];
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected:");
  });

// Fifth Promise:
// Async-Await methods:

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123456" });
    } else {
      reject("Error: Js Went Wrong");
    }
  }, 1000);
});

async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive();

// Problem in Async-Await:
// when u have a error in ur Promises, it can;t be properly handled by ASync-Await:
// so to handle them properly we have to  wrap-up then in try-catch block:

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data =  response.json();
    // here we have to use one more await as our convertion of data from object to json takes times:
    // therefore our status was showing as {Pending}
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}

getAllUsers();

// write upper prgm using .then() and .catch()
// Very Imp:
// fetch() api.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((response2) => {
    // response coming from upper then
    let data = response2;
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
