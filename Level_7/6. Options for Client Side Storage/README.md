Through the previous levels we have used `localStorage` to store data. `localStorage` is the go-to option for storing data in the browser. And we also use it to store our authentication token, preferences etc. But there are also a few other options for In-Browser Storage, namely

 - `WebStorage API`
    - `localStorage`
    - `sessionStorage`
 - `HTTP Cookies`
 - `IndexedDB`
 - `ServiceWorker API`
 - `Cache API` etc.

So there seems to be a lot of options for storing data in the browser. `WebStorage API` is a new way of storing data in the browser. It is a standard API that is being used by many browsers. We have used `localStorage` extensively in the previous levels and we are using it now to store our Access Tokens. `sessionStorage` is a bit different from `localStorage` in that it is only available to the current session. So if the user closes the browser, the data stored in `sessionStorage` will be lost. 

`HTTP Cookies` are the old school way of storing data in the browser. They are primarily used in Server Side rendered applications. 

THe next one, or the most interesting one is the `Indexed DB`. Even if you've worked with web development for a while, there's a good chance that you never heard of this before! Your browser has a Database that can hold upto 250MB of data. It is a great way to store large data in your browser if you really need to. You can read more about it at the [Official Documentation](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API). You might prefer to use a library to use the indexed DB if you come across a use case for it.

The ServiceWorker API and the Cache API are new APIs that are being used by many browsers. They are used to store data in the browser for offline use.  