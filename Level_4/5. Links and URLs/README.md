We've been using `<a href>` tags for all our links. This means that for every link that the user clicked on, the entire react app is being reloaded. This is not the desired behaviour.

In order to optimize this, you can use the `<Link>` component. The `<Link>` component will update the URL without reloading the entire page.

```js
import { Link } from 'raviger';

    <Link href="/">Home</Link>
```