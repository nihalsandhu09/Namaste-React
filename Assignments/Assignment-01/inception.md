## Namaste React Course by Akshay Saini

# _Episode 01 - Inception_

## Theory :

- What is `Emmet`?
- What is `CDN`? Why do we `use` it?
- Why is `React known as React`?
- What is `crossorigin in script tag`?
- What is difference between `React and ReactDOM`?
- What is difference between `react.development.js` and `react.production.js` files via CDN?

## Coding :

- Set up all the `tools in your laptop`
  - `VS Code`
  - `Chrome`
  - `Extensions of Chrome`
- Create a `new Git repo`
- Build your `first Hello World` program using,
  - Using `just HTML`
  - Using `JS to manipulate the DOM`
  - Using `React`
    - use `CDN Links`
    - Create `an Element`
    - Create `nested React Elements`
    - Use `root.render`
- `Push code to Github` (Theory as well as code)
- Learn about `Arrow Functions` before the next class

## References:

- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8


##  Answers - Throry 

- what is `Emmet` 

``` ## Emmet is a plugin for many popular text editors that greatly improves HTML & CSS workflow. Originally known as Zen Coding, Emmet provides a number of features to assist in writing code more efficiently. Some of its key features include:

Abbreviation Expansion: Emmet allows you to write abbreviations that can be expanded into full-fledged HTML or CSS code snippets. For example, typing ul>li*5 and then expanding it (usually by pressing the Tab key) will generate:

html
Copy code
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
CSS Support: Similar to HTML, you can write abbreviations for CSS as well. For example, typing m10 will expand to margin: 10px;.

Customizable Snippets: You can customize and create your own snippets to suit your workflow.

HTML and CSS Autocompletion: Emmet can autocomplete common HTML tags and CSS properties, making coding faster.

Wrapper and Balancer: It includes features like wrapping selected text with an HTML tag or balancing tags to ensure they are properly closed.

Lorem Ipsum Generation: Quickly generate Lorem Ipsum placeholder text by typing lorem and expanding it.

Emmet is widely used in web development because it significantly speeds up the process of writing and editing HTML and CSS code. It's available as a plugin for various editors, including Visual Studio Code, Sublime Text, Atom, and more.``` -



- What is `CDN`? Why do we `use` it? 

``` 
A Content Delivery Network (CDN) is a system of distributed servers that deliver web content and other data to users based on their geographic location, the origin of the webpage, and a content delivery server. CDNs are widely used to deliver static assets like HTML, CSS, JavaScript, images, videos, and other types of files. Here are the main reasons for using a CDN:

1. Improved Load Times
CDNs store copies of your content in multiple geographical locations, or "points of presence" (PoPs). When a user requests content, the CDN delivers it from the nearest PoP, reducing latency and load times.

2. Reduced Bandwidth Costs
By offloading traffic to CDN servers, the origin server has to handle less traffic, which can reduce bandwidth costs and alleviate the load on your primary server.

3. Increased Availability and Redundancy
CDNs help to ensure content availability and redundancy by distributing the load across multiple servers. If one server fails, others can take over, minimizing downtime.

4. Enhanced Security
Many CDNs offer security features such as DDoS protection, secure token authentication, and HTTPS support, helping to protect your website from malicious attacks.

5. Better User Experience
Faster load times and higher availability contribute to a better overall user experience, which can lead to increased user satisfaction and higher conversion rates.

Common Use Cases for CDNs
Static Asset Delivery: Serving static files such as images, videos, CSS, and JavaScript.
Web Application Delivery: Accelerating web application load times by caching dynamic content.
Software Distribution: Distributing software updates and downloads efficiently.
Video Streaming: Ensuring smooth and fast video streaming by caching video files close to end-users.  ```



