import { NavLink } from "react-router-dom";
import "./Header.scss";

export function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<img src="/./src/images/logo.svg" className="header__logo"></img>

				<div className="header__navigation">
					<NavLink to="/" className="header__home">
						Home
					</NavLink>
					<NavLink to="#" className="header__about">
						About
					</NavLink>
				</div>
			</div>
		</header>
	);
}
