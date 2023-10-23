//(georgie) first 4 vocab terms

//API ->

//This is an example of a web api that accesses the latitude and longitude of the user's position
const myElement = document.getElementById("demo");//access an element within the html

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}//creates a function that uses an if statement to get the location if not then return an innerHTML error

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}//shows the postion of the location through inner html 

/*
//standard defintion of api
API stands for Application Programming Interface. It's a set of tools, communication protocols, and subroutine definitions used to build software.

//how they work
APIs work by provide clearly defined methods of communication between different components. 

//there main use and purpose
They include routines, data structures, object classes, variables, or remote calls. Documentation helps with usage and implementation.
*/


//APPLICATION->

/* This is an example of a html form application
<form action="action_page.php">
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>
    //Creates Register heading with a subheading 

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required>
    //a section for the email

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
    //a section for the password 

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
    <hr>
    //a section to repeat/confirm the password

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
  </div>
    //an acknowledgement section and then submission

  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
  //seperate tag to login if already have an account
</form>
*/

/*
//standard defintion of application
An application program is software that runs on a computer and performs specific functions for the user. Examples include web browsers, email clients, word processors, games, and utilities.

//how they work
It's a software designed to perform a group of coordinated functions, tasks, or activities for the benefit of the user.

//there main use and purpose
Web browsers, email programs, word processors, games, and utilities are all applications
*/


//ASYNC->

//This is an example of an async function that run along side a normal function
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });//creates a function that run and returns the promise of "resolved"
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  //expected output: "resolved"
}//async function that run independlty by "calling" then returning resolved

asyncCall();//call for the async function

/*
//standard defintion of async
Async functions enable us to write promise-based code as if it were synchronous, but without blocking the execution thread.

//how they work
It operates asynchronously via the event-loop. Async functions will always return a value.

//there main use and purpose
The purpose of using async simply implies that a promise will be returned, and if a promise is not returned, JavaScript automatically wraps it in a resolved promise with its value.
*/


//AWAIT->

//THis is an example shows an await that looks for the thenable wothin the f function
async function f() {//dealcred an async function
  const thenable = {//dealcred var
    then(resolve, reject) {//using var resolve of reject this var will the output a resolved or rejected based on the conditional statement
      reject(new Error("rejected!"));//returns rejected with an error
    },
  };
  await thenable; //the await will wait for the promise in this case (thenable) which will output (rejected!)
}

f();

/*
//standard defintion of await
The await operator is used to wait for a Promise.

//how they work
It can be used inside an Async block only.

//there main use and purpose
The purpose of the await makes JavaScript wait until the promise returns a result. It should be noted that it only makes the async function block wait and not the whole program execution.
*/