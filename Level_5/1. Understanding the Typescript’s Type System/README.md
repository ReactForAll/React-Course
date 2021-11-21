# Introduction to Type System
Through this milestone we explore how typed languages are different from untyped languages and some of the advantages of typed languages.

## Compiled and Interpreted Languages
A Compiler takes an entire program (Project when dependencies are involved) and converts it into Object Code that are Platform Specific and can be executed by the machine. An Interpreter directly executes the source code line by line on the target machine.


## Common Types
Data is always stored as binary (1s and 0s). To make things simpler, we have a higher level abstraction to data storage which is applicable to most programming languages.

#### Primitive Data Types in C/C++

Integers (int) -> -32768 to 32767 | at least 16 bits
Boolean (bool) -> true or false | 1 bit
Character (char) -> Character (a-zA-Z0-1!@...) | at least 8 bits

#### Primitive Data Types in Javascript
The base data types available in Javascript are 

    undefined : typeof instance === "undefined"
    Boolean : typeof instance === "boolean"
    Number : typeof instance === "number"
    String : typeof instance === "string"
    BigInt : typeof instance === "bigint"
    Symbol : typeof instance === "symbol"

## Static and Dynamic Typing

``` 
var x = "Hello World" // Assigning String
x = false // Assigning boolean
```

## Drawbacks of Dynamic Typing | JS

High Runtime Errors: We've observer a very high frequency of Runtime Tyoe Errors in ReactJS on Error Monitoring Services.

Extra Reading: [Static Typing Where Possible, Dynamic Typing When Needed:
The End of the Cold War Between Programming Languages](https://www.ics.uci.edu/~lopes/teaching/inf212W12/readings/rdl04meijer.pdf)

As you'll learn later in this course, Typescript helps you achieve this golden middle ground between dynamically and statically typed languages.
