In the previous lessons, we have directly used the fetch API whenever we wanted to communicate with the server. This meant that we had to write a lot of code to make the request and handle the response. 

In order to make things more modular, let's create a wrapper function around our fetch API that can handle most of the edge cases associated with making requests. This function will be used to make our requests to our backend server.


```js
const API_BASE_URL = 'localhost:8000/api';

// Takes URL, GET/POST/PUT/DELETE requests and payload and returns a promise
const request = (endpoint, method = 'GET', payload = null) => {
    // Create a promise that returns the json response
    if(method === 'GET') {
        const requestParams = payload ? `?${Object.keys(payload).map(key => `${key}=${payload[key]}`).join('&')}` : '';
        const url = `${API_BASE_URL}${endpoint}${requestParams}`;
    } else {
        const url = `${API_BASE_URL}${endpoint}`;
    }
    // Basic Auth
    const auth = 'Basic ' + btoa('username:password');
    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        body: payload ? JSON.stringify(payload) : null
    }).then(response => {
        if(response.ok) {
            return response.json();
        } else {
            return response.json().then(err => {
                throw err;
            });
        }
    });
};
```

Here we have specified the headers that would be common across all our requests and we are only receiving the method, the payload and the endpoint. We are also using the `JSON.stringify` function to convert the payload into a JSON string. Since we have not setup proper authentication yet, we are also using the `Basic Auth` method to authenticate our requests.

Now that we have isolated our request function, we can use it to make our requests to our backend server. But we can actually go further. We can make functions that are specific to an endpoint which would take the right type of payload that uses this request function. For example, we can make a function that makes a request to the server to create a new form.

```tsx
const createForm = (form: Form) => {
    return request('/forms', 'POST', form);
};
```

And there we have the `createForm` function that we can use from anywhere in our app, when we want to create a new form. We can create similar wrappers for all of our endpoints. 