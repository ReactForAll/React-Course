Web accessibility (also referred to as a11y) is the design and creation of websites that can be used by everyone. Accessibility support is necessary to allow assistive technology to interpret web pages.

React fully supports building accessible websites, often by using standard HTML techniques.

In Javascript based apps, since we clear out all standard HTML Styling and Style everything ourselves, you might often find yourself using `<div>`s and `<span>`s almost everywhere. We'll learn more about the HTML techniques we need to be following to improve the accessiblity of our web pages.


### Accessible Forms

Every HTML form control elements, such as `<input>` and `<textarea>`, needs to be labeled accessibly. We need to provide descriptive labels that are also exposed to screen readers.

<!-- Demonstrate Screen Reader Reading through a Form -->

Although these standard HTML practices can be directly used in React, note that the for attribute is written as htmlFor in JSX.

Another common mistake in making Accessible forms is to forget to wrap forms with the `<form>` tag and handle the `onSubmit` function instead of the `onClick` function of the submit button.

Let's go ahead and make sure that our `CreateForm` element is managed well so that you can submit the form by using keyboard controls.
### Focus Control 

Focus Control or Keyboard Accessiblity is to ensure that your web application can be fully operated with the keyboard only. As developers we often come across how much better we can navigate through web pages this way. A good example of this is Whatsapp Web, where I personally Switch between chats, search, send messages etc only using the keyboard, practically every day.

A great focus management example is the [react-aria-modal](http://davidtheclark.github.io/react-aria-modal/demo/). This is a good example of a fully accessible modal window. Not only does it set initial focus on the cancel button (preventing the keyboard user from accidentally activating the success action) and trap keyboard focus inside the modal, it also resets focus back to the element that initially triggered the modal.

### ESLint to the Rescue

Since we've used CRA to generate our React App, we already have ESLint configured with `eslint-plugin-jsx-a11y` and `eslint-plugin-react` which would help us enforce the accessibility guidelines. So as long as you keep an eye out for warnings you're covered to some extent. You will need to put you mind into it, to go the next step and make sure that any element that the user needs to read or interact with are accessible.

<!-- Demonstrate eslint-a11y warnings -->
