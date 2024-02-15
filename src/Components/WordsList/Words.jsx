import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import './wordslist.css';

const Words = ({ data }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedWords, setEditedWords] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setButtonDisabled(data.map(() => false));
  }, [data]);

  const displayMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const toggleEditMode = (index) => {
    if (!isEditMode) {
      const edited = data.map((word, i) => {
        const editedWord = { ...word };
        editedWords[i] = editedWord;
        return editedWord;
      });
      setEditedWords(edited);
    }
    setIsEditMode(!isEditMode);
  };

  const handleInputChange = (event, index, property) => {
    const value = event.target.value;
    setEditedWords((prev) =>
      prev.map((word, i) => {
        if (i === index) {
          const editedWord = { ...word, [property]: value };
          return editedWord;
        }
        return word;
      }),
    );
    setButtonDisabled((prev) =>
      prev.map((disabled, i) =>
        i === index ? value.trim() === '' || value.trim() === data[index][property] : disabled,
      ),
    );
  };

  const handleSaveClick = () => {
    if (buttonDisabled.some((disabled) => disabled)) {
      displayMessage('Ошибка: одно или несколько полей заполнены некорректнo');
    } else {
      console.log('Измененные слова:', editedWords);
      displayMessage('Изменения успешно сохранены');
      setIsEditMode(false);
    }
  };

  const handleCancelClick = () => {
    setEditedWords(data.slice());
    setIsEditMode(false);
  };

  const renderRows = () => {
    return data.map((word, index) => {
      const editedWord = editedWords[index];
      const borderColor = buttonDisabled[index] ? 'red' : '';

      return (
        <tr key={index}>
          {['english', 'transcription', 'russian'].map((property) => (
            <td key={property}>
              {isEditMode ? (
                <input
                  type="text"
                  value={editedWord[property]}
                  onChange={(e) => handleInputChange(e, index, property)}
                  style={{ borderColor }}
                />
              ) : (
                word[property]
              )}
            </td>
          ))}
          <td>
            {isEditMode ? (
              <>
                <button
                  className={`saveBtn${buttonDisabled[index] ? ' disabled' : ''}`}
                  onClick={handleSaveClick}
                  disabled={buttonDisabled[index]}>
                  Сохранить
                </button>
                <button className="cancelBtn" onClick={handleCancelClick}>
                  Отмена
                </button>
              </>
            ) : (
              <button
                className="change-button"
                type="button"
                title="Редактировать слово"
                onClick={() => toggleEditMode(index)}>
                Изменить
              </button>
            )}
            <button className="delete-button" title="Удалить слово">
              Удалить
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      {message && (
        <div className="MessageContainer">
          <div className="Message">{message}</div>
        </div>
      )}
      <div className="List">
        <table>
          <thead>
            <tr>
              <th>Слово</th>
              <th>Транскрипция</th>
              <th>Перевод</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
    </>
  );
};

export default Words;
