const tinderUser = new Object();

tinderUser.Id = "123";
tinderUser.name = "Rakesh";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
  email: "user@gmail.com",
  fullname: {
    userFullname: {
      firstName: "Rohan",
      lastName: "Tayde",
    },
  },
};

// console.log(regularUser["fullname"]["userFullname"]);

const Object1 = {
  1: "a",
  2: "b",
  3: "c",
};
const Object2 = {
  4: "d",
  5: "e",
  6: "f",
};

//const Object3 = Object.assign(Object1, Object2);

//console.log(Object3);
//console.log(Object3["5"]);

// but majorly we can use spread methos to join two object.

const Object3 = { ...Object1, ...Object2 };
console.log(Object3);

console.log(Object.keys(Object3));
console.log(Object.values(Object2));
console.log(Object.entries(tinderUser));

// to check if any value is there in the object.

//console.log(Object3.hasOwnProperty("IsLoggedIn"));
