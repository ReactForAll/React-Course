
By now we have a form builder that allows us to to create our own custom form of text inputs! We have also updated our data structure or types to be capable of storing multiple forms. Our only limitation at this point is, we don't have a screen that lists all available forms.

For this Milestone you should
- Implement a Component that lists all forms available in the localStorage
- Make sure that the form list is updated when a new form is saved
- Remove the hardcoded formId from the Form Component
- The List of Forms should have 2 buttons, one to open the form and then edit it, and one to delete the form
- Revert the hack in the `getInitialState` function that currently returns the first form in the localStorage so that all forms can be viewed

### Submission Guidelines

1. Ensure your code is well-formatted. Unformatted code will be rejected without review. To format your code, you can use Prettier. When submitting, attach a link to the exact folder in your Github repo with the App.tsx file.
2. The List of Form Items should be styled with TailwindCSS uniquely and creatively.
