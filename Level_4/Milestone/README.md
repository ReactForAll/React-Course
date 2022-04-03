By now, we have a function Form Builder with which we can manage a number of forms.

For this milestone, you need to

- Create a Preview Page that takes a user through each question like a Quiz, one at a time.
- In the preview page, each quiz/form would have a unique URL, so that it is possible to share a specific quiz as a URL.
- Configure the router such that each quiz would have a public link for previewing it. `/preview/:formId`
- Collect the user's answers into the state of the Preview Page.
- Remove the `input` fields that allow editing the value/answer from the Form Builder Screen at `/form/:formId` and make the label of each question editable instead.
- Create a dropdown to select the input type of the new field being added.

### Submission Guidelines

1. Ensure your code is well-formatted. Unformatted code will be rejected without review. To format your code, you can use Prettier. When submitting, attach a link to the exact folder in your GitHub repo with the App.tsx file.
2. Make sure that the app builds with no warnings in the console.
3. All links within the App should use `<Link>` instead of `<a>` tags.
