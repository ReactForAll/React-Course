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

Or you can use the Open Folder option in VS Code to open the project folder.

### Setting up Tailwind CSS

For this project we'll be using TailwindCSS to style our app. Let's follow the official instructions to setup our Create React App (CRA) project with TailwindCSS:

You can find the official instructions [here](https://tailwindcss.com/docs/guides/create-react-app).

Let's go through the steps to setup your project with TailwindCSS:

We've already opened our project in VS Code. We'll be using the terminal inside VS Code to run our commands. You can press CTRL + SHIFT + T (Windows) or CTRL + OPT + T (Mac) to open the terminal.

You can run the following command in the terminal to install the dependencies for setting up TailwindCSS:

```
    npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

This might take about a minute or so. Next, you need to use a command line tool to create the initial configuration file for TailwindCSS. You can run:

```
    npx tailwindcss-cli@latest init
```

This would create a file named tailwind.config.js in the root of your project. This file contains the configuration for TailwindCSS.

Next you need to make the react-scripts consider our Tailwind Configuration in the build process. In order to do this you need to use something known as CRACO (Create React App Configuration Override). You can do this by first installing CRACO using the following command:

```
    npm install @craco/craco
```

Then you need to replace `react-scripts` in the `scripts` section of your package.json file with `craco`. You would replace your start, build and test commands with craco commands.

Next you need to create a craco.config.js file in the root of your project with the following code:

```js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

Now finally you can replace your the content in your `index.css` file with the following content:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And alas! your tailwind is now set up all perfectly! With the tailwind-intellisense plugin that we installed in the previous lesson, you'd also get suggestions with tailwind classes that you can use to style your app!

That's all the setup you need to get started with React, Typescript and TailwindCSS. So let's dive right into building our app in the next lesson!


