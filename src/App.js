import "./App.css";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import dataElements from "./Data.js";

function App() {
  let Cards = dataElements.map((dataElement) => {
    return (
      <Card
        key={dataElement.id}
        dataElement={dataElement}
        length={dataElements.length}
      />
    );
  });
  return (
    <>
      <Header />
      {Cards}
    </>
  );
}

export default App;
