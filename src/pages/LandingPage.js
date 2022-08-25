import { NavLink, Route, Routes } from "react-router-dom";

import IncrementNum from "./landingPage/IncrementNum";

export default function LandingPage() {
	return (
		<>
			<nav>
				<NavLink to="/" className={({ isActive }) => (isActive ? "btn-active" : "btn")}>
					Counter
				</NavLink>
				<NavLink
					to="/cat-facts"
					className={({ isActive }) => (isActive ? "nav-btn-active" : "nav-btn")}
				>
					Api - Cat Facts
				</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<IncrementNum />} />
				<Route path="/cat-facts" element={<h1>Hi</h1>} />
			</Routes>
		</>
	);
}
