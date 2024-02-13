import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Game from './Components/Game/Game';
import Error from './Components/Error';
import Instruction from './Components/Instruction';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WordsContextProvider } from './context/WordsContext';
import MainPage from './Components/Main/MainPage';

function App() {
  return (
    <WordsContextProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="Content">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="game" element={<Game />} />
              <Route path="instruction" element={<Instruction />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </WordsContextProvider>
  );
}

export default App;
