import "./Paginator.scss";

export function Paginator() {
	return (
		<ul className="paginator">
			<li className="page page__arrow">
				<a href="#">
					<img className="arrow left-arrow" src="/src/images/left-arrow.svg"></img>
				</a>
			</li>
			<li className="page page_active">
				<a href="#">1</a>
			</li>
			<li className="page">
				<a href="#">2</a>
			</li>
			<li className="page">
				<a href="#">3</a>
			</li>
			<li className="ellipsis">
				<span>...</span>
			</li>
			<li className="page">
				<a href="#">42</a>
			</li>
			<li className="page page__arrow">
				<a href="#">
					<img className="arrow right-arrow" src="/src/images/right-arrow.svg"></img>
				</a>
			</li>
		</ul>
	);
}
