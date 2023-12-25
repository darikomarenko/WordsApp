import React, { useState } from "react";
import "./playcard.css";

function PlayCard({english, transcription, russian}) {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };
    return (
    <div className="parent-element">
        <div className={`word-card ${flipped ? " flipped" : ""}`} title="Нажмите на карточку, чтобы увидеть перевод" 
        onClick={handleFlip}>
            <div className="front">
                <div className="english">{english}</div>
                <div className="transcription">{transcription}</div>
        </div>
        <div className="back">
            <div className="russian">{russian}</div>
            </div>
        </div>
    </div>
    );
};

export default PlayCard;