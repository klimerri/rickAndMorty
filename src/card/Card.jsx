import "./Card.scss";

export function Card({ imgLink, name, status, lastLocation, firstSeen }) {
	return (
		<div className="card">
			<img src={imgLink} className="card__image"></img>

			<div className="card__user">
				<div className="name">
					<h1 className="name__heading">{name}</h1>

					<h2 className="name__status status_online">{status}</h2>
				</div>

				<div className="location">
					<h3 className="location__heading">Last known location</h3>

					<span className="location__last-location">{lastLocation}</span>
				</div>

				<div className="first-location">
					<h4 className="first-location__heading">First seen in</h4>

					<span className="first-location__first-seen">{firstSeen}</span>
				</div>
			</div>
		</div>
	);
}
