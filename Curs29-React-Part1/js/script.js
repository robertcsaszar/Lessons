const rootElement = document.getElementById("root");

// const reactElement = React.createElement("div", {}, "My first React element");
const reactElement = <div>My first React element</div>;

ReactDOM.render(reactElement, rootElement);

const myName = "Robert"
function computeFullName(firstName, lastName) {
  return firstName + " " + lastName;
}


ReactDOM.render(
  <div>Hello {computeFullName("Robert", "Csaszar")}!</div>,
  rootElement
);