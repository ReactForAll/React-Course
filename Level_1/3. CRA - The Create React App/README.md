The Create React App is a tool that allows you to create a new React app with no build configuration. This allows you to quickly get started without working on a lot of configuration.

To start a project using the Create React App, you can use the following command:

    npx create-react-app my-app --template typescript

This would create a new project called my-app. Now you can cd into the directory and run the app using the following commands:

    # cd into the directory
    cd my-app
    # Install dependencies
    npm install
    # Run the app
    npm start

Now you can open your browser and navigate to http://localhost:3000 to see the app running.

### Configure TailwindCSS

Now that we've setup our app, we can also go ahead and configure TailwindCSS, since we'll be using it to style our app throughout the remainder of this course.

You can refer to Tailwind's official documentation [here](https://tailwindcss.com/docs/guides/create-react-app) to setup TailwindCSS for your Create React App project.

### Replace your App.tsx

Once you've configured TailwindCSS, we can replace the App.tsx file with our own.

You can replace the return statement in the App.tsx file with the following:

```js
    <div className="flex h-screen bg-gray-100 items-center">
      <div className="w-64 p-4 mx-auto bg-white shadow-lg rounded-xl">
        <h1 className="text-center text-xl">Welcome to <br /> #react-typescript with #tailwindcss </h1>
        <img src={logo} className="animate-spin" alt="logo" />
      </div>
    </div>
```

You can also remove the App.css file and the import statement from the App.tsx file. We won't be using any additional CSS in this course.
