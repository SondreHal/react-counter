import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
	font-family: "Ameston", sans-serif;
	text-align: left;
	margin: 0.5em 0 0.5em 1em;
	display: flex;
	gap: 10px;
	text-decoration: none;
	font-size: 20px;
	color: black;
`;

export const StyledNav = styled.nav`
	display: flex;
	margin-bottom: 2em;
`;

export const CounterH1 = styled.h3`
	position: absolute;
	top: 10px;
	right: 20px;
	font-family: "Ameston", sans-serif;
`;
