/**
 * <div id= "parent">
 *       <div id child>
 * <h1> "i'm h1 tag" </h1>
 * <h2> "i'm h2 tag" </h2>
 * </div>
 * </div>
 * ReactElement(Object) => HTML(Browser Understands)
 * suppose i want to create sibbling we can give it array of children to our Reract Element
 */

const parent = React.createElement(
  "div",
  { id: "parent" },[ 
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading", key: 1 }, "I m an h1 tag"),
    React.createElement("h2", { id: "heading", key: 2 }, "I m an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading", key: 1 }, "I m an h1 tag"),
    React.createElement("h2", { id: "heading", key: 2 }, "I m an h2 tag"),
  ])
]
);

// this code looks so massy that is why there is something call as jsx >> javascript xml 

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React"
// );
// console.log(heading); // this  is object
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent); // this render function is converted this heading objject to h1 tag
