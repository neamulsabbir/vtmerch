import AOS from "aos";
import { useEffect } from "react";
import { Home } from "./components/Pages";

function App() {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<>
			<Home />
			<p>bgdjfsd dssdfsshj</p>
		</>
	);
}

export default App;
