In this lesson, let's take a look at how we can choose Typescript compatible `npm` packages to improve the functionalities of our app!

npm or Node Package Manager is actually built for javascript. So how do we use javascript-based packages without losing type safety?

Well there are 2 types of packages that you can use out of the box

 - Using packages that have the type definitions in the package itself
 - Use a package that has community-maintained type definitions. The DefinitelyTyped repository is a good place to look for these.

Some packages, for instance, raviger which we've been using for routing have inbuilt type definitions. This meant that we could simply install the package and start using it!

Most others though don't have inbuilt type definitions. When this situation comes up, the first place to look is the DefinitelyTyped repository. A good example of a popular untyped package that DefinitelyTyped supports would be react-copy-to-clipboard. If you plan to use react-copy-to-clipboard, you can install it with npm install react-copy-to-clipboard and then install the type definitions with npm install @types/react-copy-to-clipboard.

If we install react-copy-to-clipboard and then try to use it, we'll get an error, because it doesn't have the Typescript Type definitions! Thanks to the DefenitelyTyped repo we have the type definitions for react-copy-to-clipboard at @types/react-copy-to-clipboard.

We can simply install the type definitions with npm install @types/react-copy-to-clipboard and then we can directly go ahead and use it.

Let's implement the react-copy-to-clipboard package in our project to copy shareable links for a form with a single click.

```typescript
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

export default function ShareForm({props}) {
    const [copied, setCopied] = useState(false);
    
    const onCopy = () => {
        setCopied(true);
        setTimeout(() => {
        setCopied(false);
        }, 1000);
    };
    
    return (
        <div className="flex">
        <label>Shareable Link</label>
        <CopyToClipboard text={`localhost:3000/form/${props.formID}`} onCopy={onCopy}>
            <button>Copy</button>
        </CopyToClipboard>
        {copied && <span>Copied!</span>}
        </div>
    );
}
```

And there we have it! we've used a package to implement a copy-to-clipboard feature!
