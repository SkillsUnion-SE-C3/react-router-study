[<img src="assets/images/su-logo.png" alt="Skills Union Logo" height="80px" />](https://www.skillsunion.com/)

# React Router: Study

Use [DuckDuckGo](https://duckduckgo.com/) or your preferred search engine along with the provided resources to research and answer the [questions below](#questions).

## Required Reading

- [History API](https://medium.com/young-coder/a-simple-introduction-to-the-history-api-in-javascript-85b879d3d87e)
- [HashRouter vs BrowserRouter in React](https://stackoverflow.com/questions/51974369/what-is-the-difference-between-hashrouter-and-browserrouter-in-react)
- [Static and Dynamic Routing](https://blog.bitsrc.io/dynamic-vs-static-routing-in-react-49730baaf3e9)
- [How `<Switch>` works](https://reactrouter.com/web/api/Switch)

## Questions

1. How does browsing history works?

   ```
   Using the history object you can use the property and methods to keep the page history so when 
   users click back / forward / refresh is hold the page details without the app reloading from its
   start state. 
   ```

1. What problem does SPA face with the back button?

   ```
   If you don't store the data the back button can reset the whole app to its defualt state
   ```

1. What is the difference between `<HashRouter>` and `<BrowserRouter>`

   ```
   BrowserRouter:
      This is unavaliable for legacy browsers. 
      uses client-side application to maintain clean routes but needs backend by web server
   
   HashRouter: 
      No limitations on browser support
      backward compatable single page application. 
      The setup cannot be backed by server side rendering
      Not limited to SPA. 
   ```

1. What is the difference between routing with `<Switch>` and without?

   ```
   Switch renders a route exclusivly. 
   ```

### Response Guidelines

Please follow these guidelines as you answers these questions:

- Cite any relevant sources consulted during your research
- Do not reply using direct quotes from the source material
- Provide an answer using your own words and voice
