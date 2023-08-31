const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode)

function App() {
    // return React.createElement("h1", null, "Hello React")
    return React.createElement("div", null, 
        React.createElement("h1", null, "Hello React"),
        React.createElement("p", null, "Ovo je paragraf"),
        React.createElement("ul", null, 
            React.createElement("li", null, "Subtitle 1"),
            React.createElement("li", null, "Subtitle 2"),
            React.createElement("li", null, "Subtitle 3"),
        )
    )
}

// const virtualDOM = React.createElement("h1", null, "Hello React")
// console.log(virtualDOM)
root.render(React.createElement(App))

// const VD = {
//     type: "h1",
//     children: "Hello React"
// }