import { NavLink, Route, Routes } from "react-router-dom";

import IncrementNum from "./landingPage/IncrementNum";

export default function LandingPage() {
	return (
		<>
			<nav>
				<NavLink to="/" className={({ isActive }) => (isActive ? "btn-active" : "btn")}>
					Counter
				</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<IncrementNum />} />
			</Routes>
		</>
	);
}
