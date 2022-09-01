import { useContext, useEffect, useState } from "react";
import { CounterH1 } from "../../components/style";
import { CounterContext } from "../../contextState/counterContext";
import { StyledCounterH1 } from "./counter/style";

export default function IncrementNum() {
	const [num, setNum] = useState(0);
	const [setNum2] = useState(0);
	const { count } = useContext(CounterContext);

	useEffect(() => {
		const seconds = setTimeout(() => {
			setNum((num) => num + 1);
		}, 1000);

		return () => clearTimeout(seconds);
	}, [num]);

	const decrease = () => {
		setNum2((num) => num - 1);
	};
	const increase = () => {
		setNum2((num) => num + 1);
	};

	return (
		<>
			<CounterH1>useContext = {count}</CounterH1>
			<StyledCounterH1>Counter</StyledCounterH1>

			<StyledCounterH1>{num}</StyledCounterH1>
			<button onClick={decrease}>-</button>
			<button onClick={increase}>+</button>
		</>
	);
}
