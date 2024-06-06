import "./App.css";
import { Departure_Info } from "./components/DepatureInfo.js";

export function App() {
  return (
    <>
      {/* <div>
        <h1>Add travel information</h1>
        <p>This is the home page of my website.</p>
      </div> */}
      <div>
        <Departure_Info />
      </div>
      {/* <h1 className="text-3xxxxl bolder">Vite + React</h1>
      <div className="card text-3xl font-bold underline">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
