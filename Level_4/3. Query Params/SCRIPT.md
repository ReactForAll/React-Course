In the previous lesson, we refactored our application to make it capable of managing multiple forms and used `pathParams` to open a form based on the URL. In this leasson, we will learn about using `queryParams`


QueryParams are the GET parameters for a page which looks like `yourapp.com/page?search="Query"`. To access the `queryParams` you need to use the useQueryParams Hook. 

Now assuming we have large number of forms, we might need a way to filter out our forms. So, lets build a simple search that would filter our saved forms based on a keyword. Let's use `queryParams` to specify the search keyword so that it is evident in the URL.

We can use the `useQueryParams` hook to access the query params. The useQueryParams hook returns an array similar to the `useState` hook. The first element is the current queryParams as an object. The second element is a function that can be used to update the queryParams. This would look like:

```js
const [queryParams, setQueryParams] = useQueryParams();
```

Now to make our lives easier we can use destructuring to access the queryParams that we need. We are looking for the `search` query param, therefore we can destructure the first parameter of the array like:

```js
const [{ search }] = useQueryParams();
```

And let's add a form with an input text so that we can search for our forms. 

```js
<form
  className="w-full"
>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-search"
      >
        Search
      </label>
      <div className="flex">
        <input
          className="appearance-none flex-1 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-search"
          name="search"
          type="search"
          placeholder="Search"
        />
        <button
          type="submit"
          className="bg-gray-200 text-gray-700 border-2 border-gray-400 rounded-lg p-2 m-2 w-full"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</form>
```

Let's also add a filter that checks the form title against the search keyword.

```js
savedForms.filter(
            (form) =>
              form.title?.toLowerCase().includes(search.toLowerCase()) || false
          )
```
In the above example, if we open the page `localhost:3000/?search="Query"`, your component will display the forms that match the query.

Now you might notice that when you submit the search form the page is loaded fresh with the search keyword in the URL. That seems unnecessary since our entire react App is technically the same page. So how can we make the search reactive instead of freshly loading the page?

Along with the `queryParams`, the `useQueryParams` hook also gives you a funciton named `setQueryParams` which allows you to set the query params. Let's use this to update our queryParams instead of loading the page fresh.

We can add an `onSubmit` event to our form and use the `setQueryParams` function to update the queryParams.

```js
onSubmit={(e) => {
  e.preventDefault();
  setQuery({ search: searchString });
}}
```

Here, we are using the `e.preventDefault()` to prevent the default behaviour of the form that loads a new URL with the new queryParams. Once we prevent this default behavior, we use the `setQuery` API to update the `queryParams` in a reactive manner.