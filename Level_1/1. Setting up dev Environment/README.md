# Setting up the Development Environment

- [Setting up the Development Environment](#setting-up-the-development-environment)
  - [Getting Started](#getting-started)
  - [Install NVM](#install-nvm)
      - [For Mac](#for-mac)
      - [For Ubuntu](#for-ubuntu)
      - [All Users](#all-users)
  - [Install VSCode | IDE](#install-vscode--ide)
  - [Install VSCode Extensions](#install-vscode-extensions)
  - [Install React Dev Tools](#install-react-dev-tools)

## Getting Started

We recommend using a Linux or Mac OS X machine for development. If you're on Windows you can use WSL (Windows Subsystem for Linux) to run Linux commands on Windows. 

## Install NVM

#### For Mac

You can install NVM on your Mac by running the following command:

```
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

#### For Ubuntu

On Ubuntu/WSL you can install NVM by running the following command:

```
    sudo apt-get install -y curl
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

#### All Users

Once you have NVM installed, you can run the following command to install the latest LTS version of Node.js:

```
    nvm install --lts
```

You can verify that node and npm are installed correctly by running the following commands:

    node -v
    v15.2.0

    npm -v
    7.0.10

Your version might vary slightly.

## Install VSCode | IDE

We reccommend you to use [VSCode](https://code.visualstudio.com/) as your development environment, but you can use any other editor or IDE you like. Other recommended IDEs for React include:  
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [Atom](https://atom.io/)
- [Sublime Text](https://www.sublimetext.com/) etc.

You can download and install the [latest version of VSCode](https://code.visualstudio.com/Download) for your platform.


## Install VSCode Extensions

To install VSCode extensions, open the VSCode menu (`cmd + ,` on Windows, `ctrl + ,` on Linux/Mac). Then, search for the extension you want to install and click the install button.

For your React development environment, we recommend the following extensions:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Install React Dev Tools

You can optionally Install React Developer Tools using the following command:

- [React Developer Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [React Developer Tools for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-developer-tools/)