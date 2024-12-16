import "./Card.scss";
import { NavLink } from 'react-router-dom';

export function Card({ data }) {
	return (
		<NavLink className="card" to={'/character/' + data.id}> 
			<img src={data.image} className="card__image"></img>

			<div className="card__user">
				<div className="name">
					<h1 className="name__heading">{data.name}</h1>

					<h2 className="name__status status_online">{data.status}</h2>
				</div>

				<div className="location">
					<h3 className="location__heading">Last known location</h3>

					<span className="location__last-location">{data.location.name}</span>
				</div>

				<div className="first-location">
					<h4 className="first-location__heading">First seen in</h4>

					<span className="first-location__first-seen">{data.episode[0].split("/").pop()}</span>
				</div>
			</div>
		</NavLink>
	);
}
