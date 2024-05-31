import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Tutors AWS_React Project another meeting</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Tutors Web Dev Internship</p>
			<p>Another test line added</p>
		</>
	);
}

export default App;
