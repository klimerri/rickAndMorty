import "./Header.scss";

export function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<img src="/./src/images/logo.svg" className="header__logo"></img>

				<div className="header__navigation">
					<a href="#" className="header__home">
						Home
					</a>
					<a href="#" className="header__about">
						About
					</a>
				</div>
			</div>
		</header>
	);
}
