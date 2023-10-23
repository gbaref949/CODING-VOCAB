//second 4 vocab terms

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