In the previous lessons, we've used the `<a>` tag to create links to other pages on the same site. This works great for simple HTML Pages, but since we're building a React app, it isn't the most efficient way of creating links. This is because when a user clicks on an `<a>` tag, the browser will load the new link as a new page. But, React could've loaded the right component if the browser avoided loading the new page and just informed our router about the new URL, the router could've taken care of rendering the right components.

So how do we do this? We can achieve this by using the `<A>` component that hookrouter provides us with!

```js

    import { A } from 'hookrouter';

    <A href="/about">About</A>

```

We can simply render the `<A>` component and pass it the `href` attribute. The `<A>` component will automatically take care of rendering the `<a>` tag for us and will also prevent the default behaviour of the a tag and re-render the component with the new URL, without reloading the entire page.

You can also use your own custom Link component by using the `setLinkProps` helper function provided by hookrouter.

For example, if we wanted to create a `<button>` component that would work as a link to a page, we could do the following:

```js
    
    import { A, setLinkProps } from 'hookrouter';

    const Button = ({ children, ...props }) => (
    <button {...setLinkProps(props)}>{children}</button>
    );

    <Button href="/about">About</Button>
        
```

This allows us to make any component (not just `<a>`) a link.