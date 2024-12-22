<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>🟩 Wordle Game</h1>
    <p>Wordle Game is a fun and engaging word-guessing game where players have six chances to guess a five-letter word. With each guess, players receive feedback on their accuracy via color-coded hints, helping them narrow down the correct word. The game supports multiplayer features and a responsive design for an enjoyable experience on all devices.</p>

  <h2>🌐 Deployed Link</h2>
  <p>You can check out the live game <a href="https://wordle-game-two-omega.vercel.app/" target="_blank" rel="noopener noreferrer">here</a>.</p>

  <h2>🛠️ Key Features</h2>
    <ul>
        <li><strong>Word Guessing:</strong> Players guess a 5-letter word within 6 attempts, with feedback provided via colored tiles.</li>
        <li><strong>Color Hints:</strong> Green, yellow, and gray tiles indicate correct positions, partially correct letters, and incorrect letters, respectively.</li>
        <li><strong>Multiplayer Mode:</strong> Play with friends using real-time updates powered by Socket.io.</li>
        <li><strong>Responsive Design:</strong> Enjoy the game seamlessly on both desktop and mobile devices.</li>
        <li><strong>Leaderboard:</strong> Track top players based on their game performance.</li>
  </ul>

  <h2>🚀 Tech Stack</h2>
    <ul>
        <li><strong>Frontend:</strong> React, Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
<!--         <li><strong>Real-Time Communication:</strong> Socket.io</li> -->
<!--         <li><strong>Database:</strong> MongoDB</li> -->
        <li><strong>State Management:</strong> Redux</li>
        <li><strong>Version Control:</strong> Git, GitHub</li>
  </ul>

  <h2>⚙️ Installation & Setup</h2>
  <p>Follow these steps to set up the project locally:</p>

  <h3>1. Clone the repository</h3>
  <pre><code>git clone https://github.com/avinashpanchal123/wordle-game.git
cd wordle-game</code></pre>

  <h3>2. Install dependencies</h3>
  <h4>Backend</h4>
  <pre><code>cd backend
npm install</code></pre>
    <h4>Frontend</h4>
    <pre><code>cd frontend
npm install</code></pre>
};</code></pre>

    <h3>4. Configure Environment Variables</h3>
    <p>Create a <code>.env</code> file in the <code>backend</code> folder to define your environment variables:</p>
    <pre><code># .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SOCKET_PORT=3001</code></pre>

  <h3>5. Run the Application</h3>
  <h4>Backend</h4>
  <pre><code>npm start</code></pre>
  <h4>Frontend</h4>
  <pre><code>npm start</code></pre>

  <h3>6. Access the Game</h3>
  <p>Visit <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser to start playing Wordle.</p>

  <h2>🎮 Game Rules</h2>
  <ul>
      <li>Guess the 5-letter word in six attempts or less.</li>
      <li>Green tiles indicate correct letters in the correct position.</li>
      <li>Yellow tiles indicate correct letters in the wrong position.</li>
      <li>Gray tiles indicate letters that are not in the word.</li>
      <li>Use hints and logic to solve the puzzle.</li>
  </ul>

  <h2>📊 Features Overview</h2>
  <h3>1. Single-Player Mode</h3>
  <ul>
      <li>Play at your own pace and solve random puzzles.</li>
      <li>Track your game performance with a built-in history.</li>
  </ul>
  <h3>2. Multiplayer Mode</h3>
  <ul>
      <li>Challenge your friends in real-time.</li>
      <li>Enjoy dynamic gameplay with live updates via Socket.io.</li>
  </ul>
  <h3>3. Leaderboard</h3>
  <ul>
      <li>Compare your scores with other players.</li>
      <li>Stay motivated with a competitive ranking system.</li>
  </ul>

  <h2>🛠️ Future Enhancements</h2>
  <ul>
      <li>Add daily puzzles for players to enjoy.</li>
      <li>Integrate advanced analytics to track progress.</li>
      <li>Implement custom themes for a personalized experience.</li>
  </ul>

  <p>Enjoy solving words and beating your friends in this exciting Wordle Game!</p>
</body>
</html>
