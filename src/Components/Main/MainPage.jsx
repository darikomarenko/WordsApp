import React, { useContext } from 'react';
import { WordsContext } from '../../context/WordsContext';
import WordList from '../WordsList/Words';

function MainPage() {
  const { words } = useContext(WordsContext);

  return (
    <div>
      <h1>Список слов</h1>
      <WordList words={Array.isArray(words) ? words : []} />
    </div>
  );
}

export default MainPage;
