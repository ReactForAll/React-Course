Welcome to the first level of the course 301 React Typescript. This is an advanced level course or a Level 3 course, and you are expected to have completed a level 2 course before you take this.

Through this course you will learn how to build single-page web apps in React Typescript and gain an understanding on how Front End Applications work in general.

Now in order to get started, let's setup a development environment for you to start your journey in React TypeScript.

If you're on a Mac, I'll be assuming that you have homebrew installed. If you haven't done this already, you can head to `https://brew.sh/` to follow the instructions to install homebrew.

If you're on Windows, I'll be assuming that you have WSL installed. If you haven't done this already, you can google `WSL` for the official instructions.

I'll be using MacOS for this course.

## Install NodeJS

First we'll need to set up NodeJS. There are many methods to install NodeJS, but most of them would make you end up with older versions of NodeJS. Now in order to avoid this, we recommend that you use NVM (Node Version Manager).

### Install NVM

If you're on macOS, you can install NVM by running the following command:

```
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

If you're on Ubuntu, you'd have to install curl before using it to install NVM. You can run the commands below to install curl and then install NVM:

```
    sudo apt-get install -y curl
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Once you have installed NVM, you can verify that it is installed by running the following command:

```
    nvm --version
```

You should see the following output:

```
nvm version: v0.33.11
```

If you see the NVM version showing up here, it means you're nvm installation is intact.

### Install NodeJS

<!-- We'll use NodeJS version 14.18.2 for this course, because it's the LTS (Long Term Support) version right now. Even if you're following this course at a time when a newer version is available, it is recommended that you use the same version for this course. -->


With nvm installed, you can now install NodeJS by running the following command:

```
    nvm install 14.18.2
```

## Install IDE Extensions

We'll be using VS Code for this course. You would've installed VS Code in the previous courses.

In VS Code we recommend you install the following extensions:

1. Prettier: Prettier is a simple extension that formats your code as you type. It's a great way to improve your code readability. You can install it from the VS Code Marketplace.
2. tailwind-intellisense: Tailwind Intellisense is a VS Code extension that helps you to use Tailwind CSS classes in your code. This extensions gives you suggestions for styling classes based on your specific Tailwind Cofiguration. It's an extension that would make your life a lot more easier! You can install this one too from the VS Code Marketplace.

Now that you have your IDE set up, let's install the React Dev Tools extension for your browser so that you can debug your React applications with ease. React Dev Tools is available for Firefox as well as Chrome. You can install them from the respective extensions pages.

## Epilogue

With that you should be ready to start building your first React application. See you in the next lesson!