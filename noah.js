//last 4 vocab terms

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
