import { NavLink, Route, Routes } from "react-router-dom";
import CatFacts from "./landingPage/CatFacts";

import IncrementNum from "./landingPage/Counter";

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
					Cat Facts
				</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<IncrementNum />} />
				<Route path="/cat-facts" element={<CatFacts />} />
			</Routes>
		</>
	);
}
