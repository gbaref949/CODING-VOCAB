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