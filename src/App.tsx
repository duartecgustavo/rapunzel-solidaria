import { useState } from "react";
import "./App.css";
import { Container } from "./components/shareds/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container background="#a73aa7">
        <div className="col-10">dsasd</div>
      </Container>
    </>
  );
}

export default App;
