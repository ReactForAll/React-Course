Progressive Web Apps or PWAs are WebApps that can be installed on a user's phone, tablet or computer as if it were a native app. PWAs are smaller, lighter and faster to load than traditional WebApps, primarily because they are not downloaded to the user's device when they first open the app. Instead the entire app is downloaded to the user's device when they isntall it.

Since we're using CRA, it's quite easy for us to get started with PWAs. Before version 4 of CRA, the base template had the serviceWorker.js file in the root of the project. This file is responsible for registering the service worker and handling the installation of the app. From version 4, the service worker is included only in a separate template. We generated our App with the command

<!-- Setup Instructions and Files to Import -->

```
npx create-react-app my-app --template typescript
```

You have 2 options. The first one is to use the `cra-template-pwa-typescript` template, to get a template that includes the service worker. You can simply Create a new project with the `cra-template-pwa-typescript` template and move your App to the new template.

The second one is to refer the `cra-template-pwa-typescript` template's source code at (cra=template/pwa)[https://github.com/cra-template/pwa/tree/main/packages/cra-template-pwa-typescript]

Here's a checklist to help you get started:
    - Merge the index.tsx files without losing the service worker code
    - Make sure you don't miss any of the code for your App.
    - Don't forget the tailwind.config.js and postcss.config.js files
    - Merge the packages from both package.json files. (template.json if you're trying the second method)