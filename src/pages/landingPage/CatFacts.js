import axios from "axios";
import { useEffect, useState } from "react";
import { StyledCenterDiv, StyledCenterUl, StyledP } from "./catFacts/style";

export default function CatFacts() {
	const [data, setData] = useState();
	const [apiError, setApiError] = useState();

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
				<header>
					<h1>Cat Facts</h1>
				</header>
				<main>
					<StyledCenterDiv>
						<ul>
							{data.map((item, idx) => {
								return (
									<li>
										<StyledP key={idx}>{item.fact}</StyledP>
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
				<h1>Cat Facts</h1>
				<article>
					<h2>Content couldn't load, please try again</h2>
				</article>
			</>
		);
	} else {
		return (
			<>
				<h1>Cat Facts</h1>
				<article>
					<h3>Loading...</h3>
				</article>
			</>
		);
	}
}
