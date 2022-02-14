### ESLint Warnings

Since we're using CRA, we have ESLint configured in our project, ESLint gives us warnings whenever we take up sub-optimal code practices.

We can check our console for any warnings in our code. It's very important to make sure that we solve all the warnings that CRA gives us. Most CI Pipelines will block deployment if there are warnings.

Places where you commonly make mistakes are:
 - Creating useEffect() hooks with incomplete dependency arrays
 - Rendering Array into JSX without specifying keys
 - Creating `<img>` tags without an `alt` attribute
 - Creating `<a>` tags without an `href` attribute... etc

### Error Reporting

Once you push your App to Production, you need to make sure that your App is working as expected. In order to make sure that you get to know any issues that your users might encounter, we need to make sure that any error that occurs in your App is reported to you in some way!

There are many tools you can use to report errors to you. I'll be using Sentry.

In order to set up Sentry for our React App, you can simply Sign Up for a free account, create a project and then follow the instructions!

We'll install `@sentry/react` and then use the DSN to configure Sentry.

### Environment Variables

Once you have your App deployed to Production, you need to make sure you separate your production environment from your development environment. You can do this by creating a `.env` file in your root directory. You can make a .env.production file and then use that to set the environment variables for your production environment.

Once you've setup a variable in your `.env` file like:

```
REACT_APP_SENTRY_DSN=xyz
```

You can simply use the `REACT_APP_SENTRY_DSN` variable in your code like this:

```tsx
import { Sentry } from '@sentry/react';

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
  });
}
```

`.env.production`, `.env.development`, `.env.test`, and `.env.local` are all different files that you can use to set environment variables. You can read more about it [here](https://create-react-app.dev/docs/adding-custom-environment-variables/)

