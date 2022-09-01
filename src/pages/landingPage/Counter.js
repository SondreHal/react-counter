import { useContext, useEffect, useState } from "react";
import { CounterH1 } from "../../components/style";
import { CounterContext } from "../../contextState/CounterContext";
import { StyledCounterH1 } from "./counter/style";

export default function IncrementNum() {
	const [num, setNum] = useState(0);
	const { count } = useContext(CounterContext);

	useEffect(() => {
		const seconds = setTimeout(() => {
			setNum((num) => num + 1);
		}, 1000);

		return () => clearTimeout(seconds);
	}, [num]);

	return (
		<>
			<CounterH1>useContext = {count}</CounterH1>
			<StyledCounterH1>Counter</StyledCounterH1>
			<StyledCounterH1>{num}</StyledCounterH1>
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
