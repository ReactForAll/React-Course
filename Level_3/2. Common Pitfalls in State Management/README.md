Through the previous lessons, I've mentioned that React State is asynchronous. This means that when you update a state, it doesn't immediately get updated. Instead, it gets queued up and gets updated in the background. For instance,

```js
    const [count, setCount] = useState(0);
    const increment = () => {
        console.log('before update', count);
        setCount(count + 1);
        console.log('after update', count);
    };
```

Failure to realize this, you can end up with a situation where you're trying to update a state that's already being updated. For instance, If you update a state twice in a row, you probably won't see the behavior you expect. 

```js
    const [count, setCount] = useState(0);
    const increment = () => {
        console.log('before update', count);
        setCount(count + 1);
        setCount(count + 2);
        console.log('after update', count);
    };
```