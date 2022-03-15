In this lesson, you'll be learning to deploy your App to Netlify


<!-- Video -->


> In order to configure Netlify to work well with out Routing, you'll need to create a `netlify.toml` file in your root directory with the following content:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```