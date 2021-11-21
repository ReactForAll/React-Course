Using `<a>` tags isn't the best way to create link in your React app. This causes the page to unnecessarily reload.

If you want to create an anchor tag, you can use the `<A>` component from the 'hookrouter' library.

```js
    import { A } from 'hookrouter';

    <A href="/">Home</A>
```

This would mimic an `<a>` tag in the dom, but override the default behavior of loading the new URL as a new page, and instead updates the URL and requests the router to re-render the app based on the new URL.

You can also use the `setLinkProps` helper function from the 'hookrouter' library to create your own custom component that works as a link. 


```js
    
    import { A, setLinkProps } from 'hookrouter';

    const Button = ({ children, ...props }) => (
    <button {...setLinkProps(props)}>{children}</button>
    );

    <Button href="/about">About</Button>
        
```