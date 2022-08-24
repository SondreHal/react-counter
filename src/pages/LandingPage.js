import { useEffect, useState } from "react";

export default function LandingPage() {
	const [num, setNum] = useState(0);

	useEffect(() => {
		const seconds = setTimeout(() => {
			setNum((num) => num + 1);
		}, 1000);
		return () => clearTimeout(seconds);
	}, [num]);
	return (
		<>
			<h1>{num}</h1>
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
