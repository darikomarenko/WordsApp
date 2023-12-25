import React, { useState, useCallback, useEffect} from "react";
import PlayCard from "../PlayCard/PlayCard";
import "./game.css";

function Game({ data, disableFirstAndLast, defaultIndex}) {
    const [currentIndex, setCurrentIndex] = useState(defaultIndex || 0);
    const [flipped, setFlipped] = useState(false);

    const handlePrevClick = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            if (disableFirstAndLast) {
                setCurrentIndex(data.length - 1);
            }
        }
        setFlipped(false);
    }, [currentIndex, disableFirstAndLast, data]);

    const handleNextClick = useCallback(() => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            if (disableFirstAndLast) {
                setCurrentIndex(0);
            }
        }
        setFlipped(false);
    }, [currentIndex, disableFirstAndLast, data]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") {
                handlePrevClick();
            } else if (event.key === "ArrowRight") {
                handleNextClick();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handlePrevClick, handleNextClick]);

    return (
        <div className="game">
            {data[currentIndex] ? (
                <PlayCard
                    key={currentIndex}
                    word={data[currentIndex].word}
                    english={data[currentIndex].english}
                    transcription={data[currentIndex].transcription}
                    russian={data[currentIndex].russian}
                    flipped={flipped}
                    setFlipped={setFlipped}
                />
            ) : ( "Ooops, no data"
            )}
            <div className="buttons">
                <button
                    className="prev"
                    title="Предыдущее слово"
                    onClick={handlePrevClick}
                    disabled={!disableFirstAndLast && currentIndex === 0}
                >
                    &#8592;
                </button>
                <div className="current-slide">
                    {currentIndex + 1}/{data.length}
                </div>
                <button
                    className="next"
                    title="Следующее слово"
                    onClick={handleNextClick}
                    disabled={!disableFirstAndLast && currentIndex === data.length - 1}
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
}

Game.defaultProps = { data: [], defaultIndex: 0 };

export default Game;