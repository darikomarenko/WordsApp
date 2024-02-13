import React, { useState, useCallback, useEffect } from 'react';
import Loader from '../Loader/Loader';
import PlayCard from '../PlayCard/PlayCard';
import './game.css';

function Game({ disableFirstAndLast, defaultIndex }) {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex || 0);
  const [flipped, setFlipped] = useState(false);
  const [learnedCount, setLearnedCount] = useState(0);
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch('https://itgirlschool.justmakeit.ru/api/words')
      .then((response) => response.json())
      .then((data) => setWords(data));
  }, []);

  const incrementLearnedCount = () => {
    setLearnedCount((prevCount) => prevCount + 1);
  };

  const handlePrevClick = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      if (disableFirstAndLast) {
        setCurrentIndex(words.length - 1);
      }
    }
    setFlipped(false);
  }, [currentIndex, disableFirstAndLast, words]);

  const handleNextClick = useCallback(() => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      if (disableFirstAndLast) {
        setCurrentIndex(0);
      }
    }
    setFlipped(false);
  }, [currentIndex, disableFirstAndLast, words]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePrevClick();
      } else if (event.key === 'ArrowRight') {
        handleNextClick();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrevClick, handleNextClick]);

  return (
    <div className="game">
      {words[currentIndex] ? (
        <PlayCard
          key={currentIndex}
          word={words[currentIndex].word}
          english={words[currentIndex].english}
          transcription={words[currentIndex].transcription}
          russian={words[currentIndex].russian}
          flipped={flipped}
          setFlipped={setFlipped}
          incrementLearnedCount={incrementLearnedCount}
        />
      ) : (
        <Loader />
      )}
      <div className="buttons">
        <button
          className="prev"
          title="Предыдущее слово"
          onClick={handlePrevClick}
          disabled={!disableFirstAndLast && currentIndex === 0}>
          &#8592;
        </button>
        <div className="current-slide">
          {currentIndex + 1}/{words.length}
        </div>
        <button
          className="next"
          title="Следующее слово"
          onClick={handleNextClick}
          disabled={!disableFirstAndLast && currentIndex === words.length - 1}>
          &#8594;
        </button>
      </div>
      <div className="counter">Изучено слов: {learnedCount}</div>
    </div>
  );
}

Game.defaultProps = { words: [], defaultIndex: 0 };

export default Game;
