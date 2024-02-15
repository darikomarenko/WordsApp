import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Game from './components/Game/Game';
import Error from './Components/Error';
import Instruction from './Components/Instruction';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import wordStore from './store/Words';
import { Provider } from 'mobx-react';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <Provider wordStore={wordStore}>
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
    </Provider>
  );
}

export default App;
