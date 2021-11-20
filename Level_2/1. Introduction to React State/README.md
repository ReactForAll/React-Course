# Introduction to React State

As we've learned in the previous lessons, React components can be either functional or class-based. A functional React component would look like:

```js
    const MyComponent = () => <div>Hello World</div>;
```
meanwile a class-based React component would look like:

```js
    class MyComponent extends React.Component {
        render() {
            return <div>Hello World</div>;
        }
    }
```

React components use State to manage their internal state. State is a plain JavaScript object that can be used to record and react to user interactions. For Example, a click counter component might have a state that looks like this:

```js
    class Button extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 0
            };
        }
        render() {
            return (
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
                    {this.state.counter}
                </button>
            );
        }
    }
```

In React, each component has its own state. When a component's state changes, the component re-renders. This is called a "controlled component". You can also have a component that renders directly based on it's props, without any state. This is called an "uncontrolled component". In this example, the Button component is a controlled component because it has its own state. In the previous lessons, we've seen the use of uncontrolled components.
