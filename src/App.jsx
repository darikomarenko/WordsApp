import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WordsList from "./components/WordsList/Words";
import wordsdata from "./components/words.json";
import Game from "./components/Game/Game";
import Error from "./Components/Error";
import Instruction from "./Components/Instruction";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const wordslist = wordsdata;
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Content">
          <Routes>
            <Route path="/" element={<WordsList data={wordslist} />} />
            <Route path="game" element={<Game data={wordslist} />} />
            <Route path="instruction" element={<Instruction />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
