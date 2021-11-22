### Interfaces

Interfaces in typescript are used to define what an object would look like. Or in other words, an interface can be used to define a type. For Instance:

```js
interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}
```

When you're working with an API, you can use the interface to define what the response should look like.

An added advantage of using interfaces is you can extend an interface to define another that is more specific than the interface.

```js
interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}
// Interface that extends User
interface Admin extends User {
    role: string;
}
```

With this, you can define a new interface that is more specific than the User interface. We don't have an `Admin` interface that has all the properties of the User interface and the role property in addition to that.


### Optional Properties

When you create an interface, not all properties of the interface maybe required. Some of them can be optional You can denote these using a `?` symbol. This is known as optional properties.

```js
interface Person {
    firstName: string;
    lastName?: string;
}
```
