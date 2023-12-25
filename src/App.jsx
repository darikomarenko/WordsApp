import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WordsList from "./components/WordsList/Words";
import wordsdata from "./components/words.json";
import Game from "./components/Game/Game";

function App() {
  const wordslist = wordsdata;
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <WordsList data={wordslist} />
        <Game data={wordslist} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
