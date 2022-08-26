import { useEffect, useState } from "react";
import { StyledH1 } from "./counter/style";

export default function IncrementNum() {
	const [num, setNum] = useState(0);

	useEffect(() => {
		const seconds = setTimeout(() => {
			setNum((num) => num + 1);
		}, 1000);

		return () => clearTimeout(seconds);
	}, [num]);

	return (
		<>
			<h1>Counter</h1>
			<StyledH1>{num}</StyledH1>
			<button
				onClick={() => {
					setNum((num) => num - 1);
				}}
			>
				-
			</button>
			<button
				onClick={() => {
					setNum((num) => num + 1);
				}}
			>
				+
			</button>
		</>
	);
}
