# CRA - The Create React App

Welcome back! Now that you have you have your development environtment set up, let's create a React project so that you can start coding!

The Create React App is an official tool that allows you to create a new React app with no build configuration. This allows you to quickly get started without working on a lot of configuration.

To start a project using the Create React App, you can simply open your teminal and write the following command:

```
npx create-react-app my-app --template typescript
```

Now this might take anything between 15 seconds to 15 minutes depending on your internet connection.

This would create a new project called my-app. Now you can cd into the directory and run the app using the following commands:

```
# cd into the directory
cd my-app
# Run the app
npm start
```

Now you can open your browser and navigate to http://localhost:3000 to see the app running.

Tada! Now you have a react app that you can start working on!

### Opening your project in VS Code

To open your project in VS Code, you can use the following command:

```
code .
```

This would work only if you have VS Code's command line utility configured. Alternatively, you can use the Open Folder option in VS Code to open the project folder.

### Setting up Tailwind CSS

For this project we'll be using TailwindCSS to style our app. Let's follow the official instructions to setup our Create React App (CRA) project with TailwindCSS:

You can find the official instructions [here](https://tailwindcss.com/docs/guides/create-react-app).

Let's go through the steps to setup your project with TailwindCSS:

We've already opened our project in VS Code. We'll be using the terminal inside VS Code to run our commands. You can press CTRL + SHIFT + T (Windows) or CTRL + OPT + T (Mac) to open the terminal.

You can run the following command in the terminal to install the dependencies for setting up TailwindCSS:

```
npm install -D tailwindcss postcss autoprefixer
```

This might take about a minute or so. Next, you need to use a command line tool to create the initial configuration file for TailwindCSS. You can run:

```
npx tailwindcss init -p
```

This would create a file named tailwind.config.js in the root of your project. This file contains the configuration for TailwindCSS.

Now you need to modify the generated tailwind.config.js file to specify the path to your project files. You can do this by changing the `content` to the following:
```
content: ["./src/**/*.{js,jsx,ts,tsx}"]
```

Now finally you can replace your the content in your `index.css` file with the following content:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And alas! your tailwind is now set up all perfectly! With the tailwind-intellisense plugin that we installed in the previous lesson, you'd also get suggestions with tailwind classes that you can use to style your app!

That's all the setup you need to get started with React, Typescript and TailwindCSS. 

Since we'll be solely using TailwindCSS for styling for the remainder of this course, let's replace the `App.tsx` file with something that uses Tailwind! 


```js
<div className="flex h-screen bg-gray-100 items-center">
  <div className="w-64 p-4 mx-auto bg-white shadow-lg rounded-xl">
    <h1 className="text-center text-xl">Welcome to <br /> #react-typescript with #tailwindcss </h1>
    <img src={logo} className="animate-spin" alt="logo" />
  </div>
</div>
```

You can also go ahead and delete the `App.css` file and remove it's import from the `App.tsx` file since we won't be needing it anymore.

<!-- Open Google Forms to explain what we're building -->

Through this course, we'd be building a form builder like Google Forms!

So let's dive right into building our app in the next lesson!

