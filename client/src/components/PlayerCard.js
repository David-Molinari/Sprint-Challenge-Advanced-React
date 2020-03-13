import React from 'react';
import '../App.css';

const PlayerCard = props => {
    return (
            <div className = "player-card-wrapper">
                <div className = "name">
                    <p>{props.name}</p>
                </div>
                <div className = "country">
                    <p>{props.country}</p>
                </div>
                <div className = "searches">
                    <p>{props.searches}</p>
                </div>
            </div>
    )
}

export default PlayerCard;