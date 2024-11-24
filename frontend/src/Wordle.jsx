import React, { useState, useEffect } from "react";
import WordleBoard from "./WordleBoard";
import wordleLogo from '/assets/wordle-favicon.ico'

const WordleGame = () => {
    const fiveLetterWords = [
        "apple", "eagle", "brave", "charm", "happy", "joker", "sword", "table", "ocean", "tiger",
        "about", "alarm", "angle", "beach", "chalk", "color", "dream", "eagle", "earth", "entry",
        "fairy", "field", "flash", "grace", "graph", "guest", "heart", "hobby", "honor", "house",
        "image", "inner", "joker", "keeny", "knife", "label", "labor", "laugh", "light", "limit",
        "maker", "manor", "maple", "marry", "metal", "minor", "model", "month", "motor", "mover",
        "night", "noble", "ocean", "orbit", "outer", "owner", "paint", "panel", "party", "phone",
        "plain", "plane", "plant", "prize", "queen", "quiet", "rapid", "raven", "reach", "right",
        "salty", "scale", "score", "shade", "shine", "short", "skill", "smile", "solid", "space",
        "table", "tasty", "teach", "tiger", "token", "trace", "trend", "trust", "urban", "vivid"
    ];

    const [todaysWord, setTodaysWord] = useState("");

    useEffect(() => {
        const randomWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)].toUpperCase();
        setTodaysWord(randomWord);
    }, []);

    return (
        <div>
            <div className='container'>
                <div>
                    <img src={wordleLogo} alt="" />
                </div>
                <h1>Wordle</h1>
                <h2>Get 6 chances to guess a 5-letter word.</h2>
            </div>
            {/* <p>Today's Word: {todaysWord}</p>  */}
            <WordleBoard todaysWord={todaysWord} />
        </div>
    );
};

export default WordleGame;
