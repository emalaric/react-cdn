const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode)

function App() {
    return (
    <>
        <h1>Pozdrav Algebra iz JSX-a</h1>
        <Paragraf />
    </>)
}

function Paragraf() {
    return (<><p>Neki odlomak</p></>)
}

// const virtualDOM = React.createElement("h1", null, "Hello React")
// console.log(virtualDOM)
root.render(React.createElement(App))

// const VD = {
//     type: "h1",
//     children: "Hello React"
// }