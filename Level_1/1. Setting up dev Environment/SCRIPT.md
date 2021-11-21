Welcome to the first level of the course 301 React Typescript. This is an advanced level course. This is a level 3 course and you are expected to complete a level 2 course before you take this.

Through this course you will learn how build single-page web apps in React Typescript and gain an understanding on how Front End Applications work in general 

Now in order to get started, let's setup a development environment for you to start your journey building React applications.

We recommend that you have a Linux or Mac System when you follow this course. If you’re on a Windows System, we recommend you install WSL or Windows Subsystem for Linux (WSL) so that you have a Linux environment to work with. If this is the case, you can follow the instructions for linux throughout this course.

If you're running macOS, I assume that you have homebrew installed. If not, you can install it by following the instructions on the following link: https://brew.sh/

I'll be using MacOS for this course.

## Install NodeJS

Before we jump into installing NodeJS, let's make sure that you have the latest version of NodeJS installed. There are many methods to install NodeJS, but most of them would make you end up with older versions of NodeJS. Now in order to avoid this, we recommend that you use NVM (Node Version Manager).

### Install NVM

If you're on macOS, assuming that you have homebrew installed, you can install NVM by running the following command:

```
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

If you're on Ubuntu, you'd have to install curl before using NVM by running the following command:

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

### Install NodeJS

We'll use NodeJS version 14.8.1 for this course, because it's the LTS (Long Term Support) version right now.

With nvm installed, you can install NodeJS by running the following command:

```
    nvm install 14.8.1
```

## Install IDE Extensions

We'll be using VS Code for this course. You would've installed VS Code in the previous courses.

In VS Code we recommend you install the following extensions:

ESLint
ESLint-plugin-react
tailwind-intellisense

On your browser, you can install

React Dev Tools

This would help you to debug your React applications better.

## Epilogue

With that you should be ready to start building your first React application. See you in the next level!
