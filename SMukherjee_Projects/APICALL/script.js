const postsListContainer = document.querySelector(".post-list-container");

// calling API XHR {not much used}

// function fetchUsingXHR() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   xhr.responseType = "json";
//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       displayResult(xhr.response);
//     } else {
//       console.log("Some ERROR occurred");
//     }
//   };
// }

// fetchUsingXHR();

//================================================

// calling API using fetch()

// function fetchUsingFetch() {
//   const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//   });

//   fetchRequest
//     .then((res) => res.json())
//     .then((result) => displayResult(result))
//     .catch((e) => console.log(e));
// }

// fetchUsingFetch();

//=================================================

// calling API using async-await

// async function fetchUsingAsyncAwait() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//   const result = await response.json();

//   displayResult(result);
// }

// fetchUsingAsyncAwait();

//=================================================

// using combination of XHR and async-await : Advanced que:

function helperMethod(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });

  return promise;
}

async function fetchUsingXHRAsyncAwait() {
  const response = await helperMethod(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  displayResult(response);
}

fetchUsingXHRAsyncAwait();
//=================================================

const displayResult = (posts) => {
  postsListContainer.innerHTML = posts
    .map(
      (postItems) =>
        `
      <div class="postItem">
      <h3>${postItems.title}</h3>
      <p>${postItems.body}</p></div>
    
    `
    )
    .join(" ");
};

// fetch Using XHR
// fetch using fetch > preferlabel
// fetch using async-await
// fetch using comibination of XHR-async-await
