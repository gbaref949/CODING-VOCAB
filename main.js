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


//(matthew) second 4 vocab terms

/* BUFFER

Description:
The Buffer class was introduced as part of the Node.js API to enable interaction with binary data. 
A buffer is a temporary memory that a stream takes to hold some data until it is consumed.

Code Example:

buf.write(string[, offset][, length][, encoding])

How it works:
Uses space in memory (usually RAM) to store binary data
string − This is the string data to be written to buffer.

offset − This is the index of the buffer to start writing at. Default value is 0.

length − This is the number of bytes to write. Defaults to buffer.length.

encoding − Encoding to use. 'utf8' is the default encoding

Use and Purpose:
Buffers are programs that are used to hold the data being processed. Buffers are set up in every program to hold data coming in and going out.

*/

/* Closure

Description:
A closure is a function having access to the parent scope, even after the parent function has closed. 

Code Example:

const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

The counter var is private, and is able to be accessed only once. Add then becomes a function that increments the counter/

How it works:
Uses lexical scoping to define the scope of the variable by its position in the code.

Use and Purpose:
It is used to allow functions to use / contain private variables
JavaScript variables can belong to the local or global scope.
Global variables can be made local (private) with closures
*/


/* Community Committee

Description:
Is a top level committee similar to the WWW consortium. They are responsible for publications, documentation, and the direction of node.js
The committee is also retired

Example:
https://github.com/nodejs/community-committee


How it works:
Community Organization- A self-governing group with their own code of conduct.
Use and Purpose:
Tasked with everything outward facing and related to work that needs to be done on the community side of the Node.js project.
*/


/* Compiler

Description:
Node JS Utilizes the V8's JIT compiler
A compiler is a computer program that translate written code into another programming language or machine level language.

Example:
Certain code / languages require compilers to translate intructions that the machine or computer can understand.
An example of languages that require compilers to run: C, C++, C#, CLEO, COBOL.
The compiler takes over and transforms frequently executed code segments into highly optimized code


How it works:
The compiler itself is a program that translates code into a different code / language. This happens in different phases:
Lexical analysis, Syntax analysis, Semantic Analysis, Intermediate Code Generation, Optimization
Use and Purpose:
Converts code into instructions the computer can understand. Can also be used to translate code into other languages.
*/


// Vocab words 9-12 (Mercutio)

/*
CONCURRENCY

Being able to run multiple commands in parallel to each other.

It is used to enable long running tasks to be ran while the rest of your code is still responsive.
*/

setTimeout(() => console.log('I was called first!'), 500)
console.log('I was called second!')

/*
CPU

The processing power of a computer; it handles the information coming onto the computer and turns it into actions.

If you open up two different apps on a single thread cpu, the cpu will have to open the one that was queued first, then the second one.

Without the CPU, the computer would not be able to display or compute any information.
*/

/* 
DEPENDENCIES

The other modules that are required for an app to work.

It is used to tell the computer that there is additional information and functionality that needs to be downloaded in order for the app to be ran.

In package.json:
{
  "name": "example",
  "version": "1.0.0",
  "description": "this is an example",
  "main": "example.js",
  
  "dependencies": {
    "express": "^4.18.2",
    "nodemon": "^3.0.1"
  }
}
*/

/*
DEPLOY/DEPLOYMENT

The process of getting new sofware/hardware to be set up properly.

It is used to create apps or download them onto your computer.

In terminal (installs all dependencies in package.json):
$ npm install
*/


//(NOAH) last 4 vocab terms

// ECMAScript
/* Definition:
ECMAScript is a a standard for scripting languages. It acts like a blueprint for scripting languages to be created from. */

let person = {
    name: "Sherman Cruz",
    age: "21"
}

// allows arrow functions to be used to create expressions
// ECMAScript allows for use of  default parameter values in case that one value is missing
let difference = (val1, val2 = 2) => {
    // allows for the creation of block scope variables
    // Let is editable, and const is uneditable
    let temp = val1;
    const temp2 = val2;

    // it created destructuring to allow for easily getting values and assigning them to variables
    let {name, age} = person;

    // created template literals which allow for the easier combination of variables and strings
    let template = `Hi ${name}, the difference is: ${temp - temp2}`;
    return template;
};

// allows us to export functions to other files
// other files can them import the function using: import {difference} from 'noah.js'
export {difference};

/* How it works/interacts:
ECMAScript creates the basics that a scripting language will follow. It allows different pages to share information through various methods such as the import and export function */

/* How it is used:
It's used to standarize scripting languages like JavaScript and JScript. It is also used to ensure that different web pages are able to share information between each other and access said information to be used */




// Event Loop
/* Definition:
An event loop is something that pulls functions and code out of a queue and puts it onto the execution stack whenever that stack becomes empty. */

// it'll execute the code in the order that is written
// it will print the first message, second message, and third message in that order
console.log('This is the first message');
console.log('This is the second message');
console.log('This is the third message');

/* How it works/interacts:
It gets the executable functions and code when the application is running in order to execute the code in correct order to get desireable results. */

/* How it is used:
It manages the Call Stack and Callback Queue in order to execute the code in proper order. */




// Environment
/* Definition:
A set of tools used to develop software */

/* The three server tiers are : development, staging, production
Development: Development server is used to test the code and check performance. Once approved, it moves to the staging server.
Staging: Staging server is used to run tests on the staging server to check for errors and check for reliability of the server.After approved, it moves to the production server.
Production: Production server is used to host the website content and applications. */

/* How it works/interacts:
It combines software and hardware in order to provide developers with the tools to write code. */

/* How it is used:
It allows programmers to create applications and software. It allows developers to edit and change code in an environment that will not break the live environment. VS Code is an example of a development environment. */




// Function
/* Definition:
Stores a block of code that can be called at any time to execute the code inside it. */

// the function is declared and whenever it is called, it will print 'Hello World'
function printHello(){
    console.log("Hello World");
}
printHello();

/* How it works/interacts:
A set of code is declared inside a function. The function can then be called anywhere after the declaration in order to execute the code within. */

/* How it is used:
Functions can be used over and over again after they are declared. It makes the code easier to read because instead of copying the code over and over again whenever it is needed, it just needs to be declared once and then the function can be called to accomplish the desired result. */
