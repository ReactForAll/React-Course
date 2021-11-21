In a lot of situations, Typescript gives you some extra leeway by inferring the type of the variable without explicit annotation. For instance, if you write 

```js

let x = 3;
x = "Hello"; // TypeError: Type 'string' is not assignable to type 'number'.

```