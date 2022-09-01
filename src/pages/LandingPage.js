import { Route, Routes } from "react-router-dom";
import GlassDecoration from "../components/GlassDecoration";
import { StyledLink, StyledNav } from "../components/style";
import CatFacts from "./landingPage/CatFactsPage";
import IncrementNum from "./landingPage/CounterPage";
import UseContext from "./landingPage/UseContextPage.js";

//Static navbar on top of every page
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
				<Route path="/use-context" element={<UseContext />} />
			</Routes>
			<GlassDecoration />
		</>
	);
}
