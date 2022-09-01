import { useContext } from "react";
import { CounterContext } from "../../contextState/counterContext";
import { StyledContextH1 } from "./useContext/style";

export default function UseContext() {
	const { count, setCount } = useContext(CounterContext);

	const decrease = () => {
		setCount((count) => count - 1);
	};
	const increase = () => {
		setCount((count) => count + 1);
	};

	return (
		<>
			<StyledContextH1>useContext</StyledContextH1>
			<StyledContextH1>{count}</StyledContextH1>
			<button onClick={decrease}>-</button>
			<button onClick={increase}>+</button>
		</>
	);
}
