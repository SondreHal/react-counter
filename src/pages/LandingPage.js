import { Route, Routes } from "react-router-dom";
import { StyledLink, StyledNav } from "../components/style";
import CatFacts from "./landingPage/CatFacts";
import IncrementNum from "./landingPage/Counter";

export default function LandingPage() {
	return (
		<>
			<StyledNav>
				<StyledLink to="/">Counter</StyledLink>
				<StyledLink to="/cat-facts">Cat Facts</StyledLink>
				<StyledLink to="/use-context">useContext</StyledLink>
			</StyledNav>
			<Routes>
				<Route path="/" element={<IncrementNum />} />
				<Route path="/cat-facts" element={<CatFacts />} />
				<Route path="/use-context" element={<h1>useContext</h1>} />
			</Routes>
			<div className="glass-1"></div>
			<div className="glass-2"></div>
			<div className="glass-3"></div>
			<div className="glass-4"></div>
		</>
	);
}
