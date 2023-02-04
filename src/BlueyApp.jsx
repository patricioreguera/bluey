import "./BlueyApp.css";
import "./fonts/hello.ttf";
import { Route, Routes } from "react-router-dom";
import BlueyPage from "./pages/BlueyPage";
import BlueyCharacters from "./characters/pages/BlueyCharacters";
import Navbar from "./ui/components/Navbar";
import Character from "./characters/pages/Character";

function BlueyApp() {
	return (
		<>
			<Navbar />
			<div>
				<Routes>
					<Route path="/" element={<BlueyPage />} />
					<Route path="/characters" element={<BlueyCharacters />} />
					<Route path="characters/:name" element={<Character />} />
					<Route path="/*" element={<BlueyPage />} />
				</Routes>
			</div>
		</>
	);
}

export default BlueyApp;
