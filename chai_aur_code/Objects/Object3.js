// De-structuring of an Object:

const course = {
  name: "js-hindi",
  price: 555,
  courseInstructor: "rohan",
  mode: "offline",
};

// when we have to use the elements of objects in lot of places , instead of using the .dot operator every time to access them we use this method
const { courseInstructor: teacher } = course;

// this concept  is mostly used in React
console.log(teacher);
//

//JSON:
