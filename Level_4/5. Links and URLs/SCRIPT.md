In the previous lessons, we've used the `<Link>` tag to create links to other pages on the same site. This works great for simple HTML Pages, but since we're building a React app, it isn't the most efficient way of creating links. This is because when a user clicks on an `<Link>` tag, the browser will load the new link as a new page. But, React could've loaded the right component if the browser avoided loading the new page and just informed our router about the new URL, the router could've taken care of rendering the right components.

So how do we do this? We can achieve this by using the `<Link>` component that raviger provides us with!

```js

    import { Link } from 'raviger';

    <Link href="/">Home</A>

```

We can simply render the `<Link>` component and pass it the `href` attribute. The `<Link>` component will automatically take care of rendering the `<Link>` tag for us and will also prevent the default behaviour of the a tag and re-render the component with the new URL, without reloading the entire page.

You can also use `<ActiveLink>` which accepts the classes the be applied when the link is active as `activeClass` and `exactActiveClass` attributes.

```js
        import { ActiveLink } from 'raviger';
        <ActiveLink href="/" activeClass="text-blue-600" >Home</ActiveLink>
        <ActiveLink href="/form" activeClass="text-blue-600" >Form</ActiveLink>
```

Now if you open up our app, you'll see that the `/` link for the home page is active always active, this is because we're matching any URL that starts with `/`, we can go ahead and switch to `exactActiveClass` to match the exact URL, this way, the Link will be active only when the URL is exactly `/`.

On the other hand for `/form` activeClass works great because we need to match `/form` as well as `/form/:id`. For the record, this would also match for `/form/:id/submission` and `/form/:id/submission/:id`.

Using `<Link>`s, we can make our App use Routes and at the same time work as slick as a SPA. 

