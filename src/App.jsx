import "./App.css";
import { Home } from "./pages/Home.jsx";
import { Character } from "./pages/Character.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/character/:characterId" element={<Character/>} />
		</Routes>
	);
}

export default App;
