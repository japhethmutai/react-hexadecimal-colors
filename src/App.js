import './App.css';

const colors = [
  "#7a33f8", "#345588", "#863769", "#f0542f", "#e38f3b", "#e8521f", "#cc5c68", "#8e8c94",
  "#245242", "#afbce2", "#6cecc6", "#a00511", "#f7b43a", "#93f7ff", "#d478d3", "#5edc2e",
  "#6633ff", "#b175e6", "#724659", "#c2dea5", "#aaaa4c", "#7d2464", "#bec18a", "#ce2bc4",
  "#22025c", "#2d6a97", "#ca4f7e", "#78d330", "#47147f", "#57ca81", "#d6e412", "#5b7add"
]

function colorStyle (color) {
  const divColor = { backgroundColor: color }
  return divColor
}

const Colors = ({ colors }) => {
  const colorsList = colors.map((color) => <div className="box" style={colorStyle(color)} key={color}>{color}</div>)
  return colorsList
}

function App() {
  return (
    <div className="container">
      <h1>30 Days of React</h1>
      <h2>Hexadecimal Colors</h2>
      <div className="grid-box">
        <Colors colors={colors} />
      </div>
    </div>
  );
}

export default App;
