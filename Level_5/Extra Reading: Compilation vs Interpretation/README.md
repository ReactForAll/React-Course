# Compilation vs Interpretation

A compiler takes source code and produces an executable. It is the executable that is executed at the client side. Meanwhile an interpreter takes source code and executes it.

Javascript is an interpreted language. It is interpreted at runtime by the browser. Meanwhile TypeScript is compiled to Javascript and this compilation acts as an additional factor of safety.

Here are some examples where static typing could help avoid run-time errors:
```

var text: string;
text = undefined; // type error, assign a number to a string type variable

function floorValue(value: number) {}
floorValue(''); // type error, use a number as a string type parameter

interface Bar {
    setName: (name: string) => void;
    getName: () => string;
}


var personInstace: Person = {
    getName: function() {
        return 'myName';
    }
} // type error, the setName function is missing in the object assigned to personInstace.

```

You might think what's the need to control the types of the parameters and return values of functions. This becomes relavant when you are working with larger projects and you want to avoid run-time errors. There could be a simple variable that is being used across multiple files and you want to make sure that this variable is always defined and never set to undefined. Typescript helps you achieve this.