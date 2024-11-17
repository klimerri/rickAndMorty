import './Card.scss'

export function Card (props) {
    return <div className='card'>
            <img src={props.imgLink} className='card__image'></img>

            <div className='card__user'>
                <div className='name'>
                    <h1 className='name__heading'>{props.name}Мяу</h1>

                    <h2 className='name__status status_online'>{props.status}Мяу</h2>
                </div>

                <div className='location'>
                    <h3 className='location__heading'>Last known location</h3>

                    <span className='location__last-location'>{props.lastLocation}Мяу</span>
                </div>

                <div className='first-location'>
                    <h4 className='first-location__heading'>First seen in</h4>

                    <span className='first-location__first-seen'>{props.firstSeen}Мяу</span>
                </div>
            </div>
        </div>
}