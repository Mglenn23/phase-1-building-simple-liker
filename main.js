// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
let modal = document.getElementById("modal");
modal.setAttribute("class", "hidden");

let like = document.querySelector(".like");
let glyp = document.querySelector(".like-glyph");
// console.log(like);
like.addEventListener("click", first);
let getServer = mimicServerCall().then();
function first(e) {
  getServer.then(function (response) {
    console.log(response);
    like.setAttribute("class", "activated-heart");
    glyp.textContent = `${FULL_HEART}`;
    console.log(glyp);
  });

  getServer.catch(function (error) {
    modal.removeAttribute("class");
    let h2 = modal.querySelector("h2");
    h2.textContent = `${error}`;
    function errorFunc() {
      modal.setAttribute("class", "hidden");
    }
    setTimeout(errorFunc, 3000);
  });
  this.removeEventListener("click", first);
  like.addEventListener("click", second);
}

function second() {
  if ((like.className = "activated-heart")) {
    like.removeAttribute("class");
    glyp.textContent = `${EMPTY_HEART}`;
  }
  this.removeEventListener("click", second);
  like.addEventListener("click", first);
}

// like.addEventListener("click", (e) => {
//   e.stopImmediatePropagation();
//
//   getServer.then(function (response) {
//     console.log(response);
//     let heart = like.setAttribute("class", "activated-heart");

//     document.onclick = second;
//     function second() {
//       if ((like.className = "activated-heart")) {
//         like.setAttribute("class", "like");
//       }
//     }
//   });
//   getServer.catch(function (error) {
//     modal.removeAttribute("class");
//     let h2 = modal.querySelector("h2");
//     h2.textContent = `${error}`;
//     function errorFunc() {
//       modal.setAttribute("class", "hidden");
//     }
//     setTimeout(errorFunc, 3000);
//   });
// });

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
