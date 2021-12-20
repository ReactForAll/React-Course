First off, optimize the App to use only `<Link>` tags over `<a>` tags, thereby making all link changes reactive.

Create a Preview Page that takes a user through each question like a Quiz, one at a time.

Configure the router such that each quiz would have a public link for previewing it and making submissions. `/preview/:formId`

Receive form submissions in a new `localStorage` entry named "submissions". Define the type for this entry in types/form.ts

