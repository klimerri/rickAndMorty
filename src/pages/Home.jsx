import "./Home.scss";
import { Header } from "../header/Header.jsx";
import { Card } from "../card/Card.jsx";
import { Paginator } from "../Shared/Paginator/Paginator1.jsx";
import { useAllCharacters } from "../hooks/useAllCharacters.js";
import { useState } from "react";

export const Home = () => {
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

			<Paginator
				pages={info?.pages}
				pressHandler={setCurrentPage}
				prev={info?.prev}
				next={info?.next}
				page={currentPage}
			/>
			{/* {!isFetching && <Paginator pagesCount={info.pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />} */}
		</>
	);
};
