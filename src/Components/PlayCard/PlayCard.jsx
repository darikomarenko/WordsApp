import React, { useEffect, useRef, useState } from 'react';
import './playcard.css';

function PlayCard({ english = 'Ooops, no Word', transcription, russian, incrementLearnedCount }) {
  const [flipped, setFlipped] = useState(false);
  const [counted, setCounted] = useState(false);
  const cardRef = useRef(null);

  const handleFlip = () => {
    if (!counted) {
      setCounted(true);
      incrementLearnedCount();
    }
    setFlipped(!flipped);
  };

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.focus();
    }
  }, []);

  return (
    <div className="parent-element">
      <div
        ref={cardRef}
        tabIndex="0"
        className={`word-card ${flipped ? ' flipped' : ''}`}
        title="Нажмите на карточку, чтобы увидеть перевод"
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
}

export default PlayCard;
