# CRA - The Create React App

The Create React App is a tool that allows you to create a new React app with no build configuration. This allows you to quickly get started without working on a lot of configuration.

To start a project using the Create React App, you can use the following command:

    npx create-react-app my-app

This would create a new project called my-app. Now you can cd into the directory and run the app using the following commands:

    # cd into the directory
    cd my-app
    # Install dependencies
    npm install
    # Run the app
    npm start

Now you can open your browser and navigate to http://localhost:3000 to see the app running.

### Why use the Create React App?

  * **It's simple**: The Create React App is a tool that allows you to quickly get started. It includes all the tools you need to develop a modern React application.
  * **It's flexible**: The Create React App is a tool that allows you to customize your app to suit your needs. You can use the Create React App to create a single-page app, a multi-page app, or a desktop app.
  * **It's easy to use**: The Create React App is easy to use, and it takes only a few minutes to get started.
  * **It's simple to extend**: The Create React App is built on the same tooling that powers the React ecosystem, so you can use the same build process to add additional features.
  * **It's easy to customize**: The Create React App is fully customizable. With the help of craco, you can easily add your own configuration to the Create React App.

## Configure TailwindCSS

Now that we've setup our app, we can also go ahead and configure TailwindCSS, since we'll be using it to style our app throughout the remainder of this course.

Let's head to `/public/index.html` and add the following code:

```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" />
```

Let's also run the following command so that we have a tailwind.config file in our project directory:

```
    npx tailwind init
```
