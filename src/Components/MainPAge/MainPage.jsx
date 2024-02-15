import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import WordsList from '../WordsList/Words';
import './MainPage.css';
import AddWordForm from '../AddWordForm/AddWordForm';

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
        <AddWordForm />
        <WordsList />
      </div>
    );
  }),
);

export default MainPage;
