Like we've seen in the previous lesson, our React App compiles to merely a HTML file with a JS Script on it. This means that you don't need a server to publish your app to the web. You just need a service that can host these files. There are a lot of services that you could use to do this. Some of these are 
    - Netlify
    - Github Pages
    - Vercel
    - Amazon S3 etc..
  
In this lesson, we'll learn to deploy using Netlify since it's a free service and probably the easiest to setup.

The instructions are very simple, login to your Netlify account, Add a New Site, Link your Github Repo and Click on Deploy! It's actually that simple! So let's go through this together. 

First let's head to Netlify and Sign Up. I'm gonna login with my Github account.

Now let's add a new site. We'll select Github as the source.

Now we can add the Github Repo of our project to deploy our project.

We can verify that the build command is correct

```
npm run build
```

And verify that the build directory is correctly set to `build`.

We can now deploy our project to Netlify. Once the build is complete, Netlify will deploy the project to a new site. We can verify this by visiting the site in our browser.

And there you have it! We've deployed our project to Netlify!

<!-- Demonstrate non-root URLs failing on Refresh -->

Now since our project is actually a Single Page Application, on top of which we've artifically added Routing, we need to make a small configuration change to our Netlify site for our routing to work well. As of now if you open any other route that the root route, Netlify will give you a 404 error.

You can make a simple `netlify.toml` file in your project root directory with

```yml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Now all requests will be forwarded to the root route, where our app actualy exists and then our routing will take care of the rest!

