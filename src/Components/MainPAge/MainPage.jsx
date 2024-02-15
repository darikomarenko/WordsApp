import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import WordsList from '../WordList/WordList';
import './MainPage.css';

const MainPage = inject('wordStore')(
  observer(({ wordStore }) => {
    useEffect(() => {
      fetch('/api/words')
        .then((response) => response.json())
        .then((data) => wordStore.setWords(data))
        .catch((error) => {
          console.log(error);
        });
    }, [wordStore]);

    return (
      <div className="MainPage">
        <h1>Список слов</h1>
        <WordsList />
      </div>
    );
  }),
);

export default MainPage;
