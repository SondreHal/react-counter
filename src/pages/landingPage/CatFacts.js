import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CounterH1 } from "../../components/style";
import { CounterContext } from "../../contextState/CounterContext";
import { StyledCatH1, StyledCenterDiv, StyledLiP } from "./catFacts/style";

export default function CatFacts() {
	const [data, setData] = useState();
	const [apiError, setApiError] = useState();
	const { count } = useContext(CounterContext);

	const GetData = () => {
		axios
			.get("https://catfact.ninja/facts")
			.then((res) => {
				setData(res.data.data);
			})
			.catch((res) => {
				setApiError(res);
			});
	};

	useEffect(() => {
		GetData();
	}, []);

	if (data) {
		return (
			<>
				<CounterH1>useContext = {count}</CounterH1>
				<header>
					<StyledCatH1>Cat Facts</StyledCatH1>
				</header>
				<main>
					<StyledCenterDiv>
						<ul>
							{data.map((item, idx) => {
								return (
									<li>
										<StyledLiP key={idx}>{item.fact}</StyledLiP>
									</li>
								);
							})}
						</ul>
					</StyledCenterDiv>
				</main>
			</>
		);
	} else if (apiError) {
		return (
			<>
				<header>
					<StyledCatH1>Cat Facts</StyledCatH1>
				</header>
				<h2>Content couldn't load, please try again</h2>
			</>
		);
	} else {
		return (
			<>
				<header>
					<StyledCatH1>Cat Facts</StyledCatH1>
				</header>
				<h3>Loading...</h3>
			</>
		);
	}
}
