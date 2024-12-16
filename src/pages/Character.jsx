import { NavLink, useParams } from 'react-router-dom'
import { Header } from '../header/Header';
import { useCharacter } from '../hooks/useCharacter';
import { useAllEpisodes } from '../hooks/useAllEpisodes';
import { useAllLocations } from '../hooks/useAllLocations';
import './Character.scss';

import episodeImg from "../images/episode.png";
import locationImg from "../images/location.png";
import rickImg from "../images/rick.png";

export const Character = () => {
    const { characterId } = useParams();
    const { data } = useCharacter(characterId);
    const { results: episodes } = useAllEpisodes();
    const { results: locations } = useAllLocations();

    if (!data || !episodes || !locations) {
        return;
    }
    
    return (
        <>
            <Header />
        
            <div className="container">
                <div className="character">
                    <div className="character__head">
                        <img className="character__img" src={data.image} alt={data.name} />

                        <div className="character__info">
                            <div>
                                <p className="name">{data.name}</p>
                                <p className="status">{data.status}</p>
                            </div>

                            <div>
                                <p className="last-location-label">Last known location:</p>
                                <p className="last-location">{data.location.name}</p>
                            </div>

                            <div>
                                <p className="seen-label">First seen in:</p>
                                <p className="seen">{data.episode[0].split("/").pop()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="character__locations">
                        <h2>Locations</h2>

                        <div className="character__locations-list">
                            {locations.map((location, i) => {
                                if (i >= 4) return;

                                return (
                                    <NavLink target="_blank" to={location.url} key={location.id} className="character__locations-item">
                                        <img src={locationImg} alt="" />
                                        
                                        <div>
                                            <div className="">
                                                <p className="title">{location.name}</p>
                                                <p className="type">{location.type}</p>
                                            </div>


                                            <div className="characters-list">
                                                <img src={rickImg} alt="" />
                                                <img src={rickImg} alt="" />
                                                <div className="more">+2</div>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>

                    <div className="character__episodes">
                        <h2>Episodes</h2>

                        <div className="character__episodes-list">
                            {episodes.map((episode, i) => {
                                if (i >= 4) return;

                                return (
                                    <NavLink target="_blank" to={episode.url} key={episode.id} className="character__episodes-item">
                                        <img src={episodeImg} alt="" />
                                        
                                        <p className="title">{episode.name}</p>
    
                                        <div>
                                            <p className="episode">{episode.episode}</p>
                                            <p className="date">{episode.air_date}</p>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}