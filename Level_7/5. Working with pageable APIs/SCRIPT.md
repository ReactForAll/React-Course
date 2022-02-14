We have created wrappers around the APIs we integrated with. But there is another part of the API that we haven't covered yet. We have seen that most of your listing APIs return a paginated response. This means that we can only fetch a certain amount of data at a time. There are a few things we can do to handle this well.

### Generic Pagination Type

We can use Generics to create a generic pagination type, that takes the Type of the data we are fetching as a parameter. If we look at the API documentation that these Paginated Responses have a count of the total number of items and a next page link. Let's first create a generic pagination type. The next and previous page links are almost irrelevant for our use case, since we have to calculate the page number from the total count and the limit we are fetching.

```tsx
type Pagination<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
};
```

Now we can add some UI to represent the Pages in our Form List API. I'm gonna use the Pagination component from TailwindUI as a starting point! Now every time we switch pages or fetch data, we can use the count, the offset and the limit to calculate the page number. We can maintain the offset in the state and use it to fetch the data.

Let's integrate the live forms API at `https://typeformapi.coronasafe.live/forms/` and fetch the data. We'll also create a wrapper function for the listForms API. From the swagger documentation we can see that this is a paginated API. Let's list our forms.