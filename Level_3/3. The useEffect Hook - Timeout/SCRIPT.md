The useEffect Hook can be used to trigger side effects to changing the state of a component.You may also use it to monitor the props of a component and execute a function based on the new values. Or in other words, useEffect is a function that gets triggered when the value of one of its dependencies change and the dependency can be either a state variable or a prop variable. You can define a useEffect with any number of dependencies.

You can also create a useEffect without any dependencies and this would trigger every time the component mounds for the first time. For instance you can create a useEffect that will change the `document.title` when a component mounts and revert it when it unmounts, using a clean up function.


```js
useEffect(() => {
  const oldTitle = document.title;
  document.title = 'Form Editor;
  return () => {
    document.title = oldTitle;
  };
}, []);
```

Here you've specifed an empty array to represent the dependencies array. This means the effect will be triggered every time the component is mounted and the cleanup function that is returned will be triggered every time when it is unmounted.

Now we can see that the title is being updated when we open the form Editior and it reverts back to the old title when we go back to the Home screen and when the form component is unmounted.

You can have any number of useEffects defined in a component. So, lets go ahead and define a new useEffect which would automatically save any changes to the form state to the local storage. This would allow us to remove the button we now have to save to local storage.

```js
  useEffect(() => {
    localStorage.setItem("formState", JSON.stringify(formState));
  }, [formState]);
```

Now with this useEffect, everytime the formState changes, we use the setItem API to update the same local storage as well. Even though this works fine for now, if we were using remote server, making a new request to save the formState for every letter that the user types, doesn't really make a lot of sense. For instance, you may have noticed in Google Sheets, that Google saves your changes only about a few seconds after you stop typing. In order to replicate such a material, lets wrap our code with a timeout and use our cleanup function to clear the timeout if the user continues to type before the timeout is triggered.

```js
  useEffect(() => {
    let timeout = setTimeout(() => {
      localStorage.setItem("formState", JSON.stringify(formState));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [formState]);
```

Great! Now we have a useEffect that will save the formState to local storage a second after the user stops typing.

It is quite important to understand how these cleanup functions work. This is particularly important when each time your effect is triggered, something new is created. For instance here every time a user types a letter, a new Timeout is created and if it's not cleaned up, it's very easy to fall into a memory leak.