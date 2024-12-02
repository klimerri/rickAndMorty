import "./App.css";
import { Header } from "./header/Header.jsx";
import { Card } from "./card/Card.jsx";
import { Paginator } from "./paginator/Paginator.jsx";
import { useAllCharacters } from "./hooks/useAllCharacters.js";
import { useState } from "react";

function App() {
	const [currentPage, setCurrentPage] = useState(1);
	const { info, results, isFetching } = useAllCharacters(currentPage);

	return (
		<>
			<Header />

			<div className="container">
				<div className="wrapper">
					{!isFetching
						? results?.map((item) => {
								return <Card data={item} key={item.id} />;
						  })
						: null}
				</div>
			</div>

			{!isFetching && <Paginator pagesCount={info.pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
		</>
	);
}

export default App;
