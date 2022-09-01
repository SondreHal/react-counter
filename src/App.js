import { useState } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { CounterContext } from "./contextState/CounterContext";
import LandingPage from "./pages/LandingPage";

export default function App() {
	const [count, setCount] = useState(0);
	return (
		<HashRouter>
			<div className="App">
				<CounterContext.Provider value={{ count, setCount }}>
					<LandingPage />
				</CounterContext.Provider>
			</div>
		</HashRouter>
	);
}
