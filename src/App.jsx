import "./App.css";
import { Header } from "./header/Header.jsx";
import { Card } from "./card/Card.jsx";
import { Paginator } from "./paginator/Paginator.jsx";
import { useState } from "react";
import img from "./images/Rick.png";

function App() {
	const [list, setList] = useState([
		{
			id: 1,
			imgLink: img,
			name: "Rick Sanchez",
			status: "Alive-Human",
			lastLocation: "Mortynight Run",
			firstSeen: "Citadel of Ricks",
		},
		{
			id: 2,
			imgLink: img,
			name: "Rick Sanchez",
			status: "Alive-Human",
			lastLocation: "Mortynight Run",
			firstSeen: "Citadel of Ricks",
		},
		{
			id: 3,
			imgLink: img,
			name: "Rick Sanchez",
			status: "Alive-Human",
			lastLocation: "Mortynight Run",
			firstSeen: "Citadel of Ricks",
		},
		{
			id: 4,
			imgLink: img,
			name: "Rick Sanchez",
			status: "Alive-Human",
			lastLocation: "Mortynight Run",
			firstSeen: "Citadel of Ricks",
		},
		{
			id: 5,
			imgLink: img,
			name: "Rick Sanchez",
			status: "Alive-Human",
			lastLocation: "Mortynight Run",
			firstSeen: "Citadel of Ricks",
		},
		{
			id: 6,
			imgLink: img,
			name: "Rick Sanchez",
			status: "Alive-Human",
			lastLocation: "Mortynight Run",
			firstSeen: "Citadel of Ricks",
		},
	]);

	return (
		<>
			<Header />
			<div className="container">
				<div className="wrapper">
					{list.map((item) => {
						return (
							<Card
								key={item.id}
								imgLink={item.imgLink}
								name={item.name}
								status={item.status}
								lastLocation={item.lastLocation}
								firstSeen={item.firstSeen}
							/>
						);
					})}
				</div>
			</div>
			<Paginator />
		</>
	);
}

export default App;
