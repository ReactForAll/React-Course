
They say "if you have a problem, there's an npm package for it!". You would see npm packages that do almost everything. A very common example used to support this statement is the fact that there's a package that you can use to check if a number is odd or even!

So when do you choose to use an npm package over implementing the feature yourself? Well, if you find a package and there are no type defenitions for it, even at DefinitelyTyped, then chances are that this isn't a well maintained package. This can be considered as red flag number one.

Secondly, check if there are recent updates to the package. Be it commits or active members in the Issues section. If there are, then chances are that the package is still maintained. If not, then chances are that the maintainer has stopped maintaining the package.

Let me give you a good example of this right out of my own personal arsenal. 

[React Tailwind Starter kit](https://www.npmjs.com/package/create-react-tailwind-app)

Here's a package that I built back when tailwind was in it's version 1 and it was quite tedious to setup a CRA project with tailwind. With the newer versions of tailwind, it's a lot more straightforward as you've experienced in the beginning of the course.

I have marked the package as deprecated in npmjs.com since I've stopped maintaining it! But not all unmaintained packages should be considered as deprecated.

Usually packages are maintained by people who have active projects that use it. For example Airbnb has come up with a `react-dates` package that is used by many Airbnb projects. This used to be a popular npm package that was used by Airbnb for a while. But now Airbnb has stopped using it and it's been moved to a separate open source org. But it has dependencies on `react-dates` has dependencies on other packages and therefore it couldn't support React 17. 

Reading through the issues section almost always give you a fair idea of how well the project is maintained.

### The Hooks attached to using Packages

Even though packages often solve your problems, even if they were maintained up until the point you started using it, you'll still face issues if they stop maintaining the project and you become unable to upgrade your project. This is the reason why you always want to use packages that are likely going to be maintained going forward.

`react-dates` being unable to support React 17 is a good example of this. You can read about it more in this issue [react-dates#2105](https://github.com/react-dates/react-dates/issues/2105).
