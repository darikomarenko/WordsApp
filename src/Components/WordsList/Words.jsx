import React, { useState } from 'react';
import './wordslist.css';

const WordsList = ({data}) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const [editedWords, setEditedWords] = useState([]);

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
    
    const handleEnglishChange = (event, index) => {
        const value = event.target.value;
        setEditedWords((prev) =>
        prev.map((word, i) => {
            if (i === index) {
            const editedWord = { ...word, english: value };
            return editedWord;
            }
            return word;
        })
        );
    };

    const handleTranscriptionChange = (event, index) => {
        const value = event.target.value;
        setEditedWords((prev) =>
        prev.map((word, i) => {
            if (i === index) {
            const editedWord = { ...word, transcription: value };
            return editedWord;
            }
            return word;
        })
        );
    };
    
    const handleRussianChange = (event, index) => {
        const value = event.target.value;
        setEditedWords((prev) =>
        prev.map((word, i) => {
            if (i === index) {
            const editedWord = { ...word, russian: value };
            return editedWord;
            }
            return word;
        })
        );
    };
    

    const handleSaveClick = () => {
        console.log(editedWords);
        setIsEditMode(false);
    };
    
    const handleCancelClick = () => {
        setEditedWords(data.slice());
        setIsEditMode(false);
    };

    const renderRows = () => {
        return data.map((word, index) => {
        const editedWord = editedWords[index];
        return (
            <tr key={index}>
            <td>{isEditMode ? <input type="text" value={editedWord.english} onChange={(e) => handleEnglishChange(e, index)} /> : word.english}</td>
            <td>{isEditMode ? <input type="text" value={editedWord.transcription} onChange={(e) => handleTranscriptionChange(e, index)} /> : word.transcription}</td>
            <td>{isEditMode ? <input type="text" value={editedWord.russian} onChange={(e) => handleRussianChange(e, index)} /> : word.russian}</td>
            <td>{isEditMode ? <input type="text" value={editedWord.tags} onChange={(e) => handleEnglishChange(e, index)} /> : word.tags}</td>

            <td>
                {isEditMode ? (
                <>
                    <button className="save-button" onClick={handleSaveClick}>Сохранить</button>
                    <button className="cancel-button" onClick={handleCancelClick}>Отмена</button>
                </>
                ) : (
                <button className="change-button" onClick={() => toggleEditMode(index)}>Изменить</button>
                )}
                <button className="delete-button">Удалить</button>
            </td>
            </tr>
        );
        });
    };
    return (
        <table>
        <thead>
            <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Уровень</th>
            <th width="30%">Действия</th>
            </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
        </table>
    );
    }

export default WordsList;