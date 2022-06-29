import { useEffect, useState } from 'react';

import './App.css';

// api: https://api.chucknorris.io/jokes/random
const API_URL = 'https://api.chucknorris.io/jokes/random';

function App() {
  const [joke, setJoke] = useState('');

  const generateJoke = () => {

    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value));  
  }

  useEffect(() => {
    return;
  }, []);

  return (
    <div className="App">

      <div className="App-header">
        <img className='App-logo' src='https://cdn.dribbble.com/users/24711/screenshots/1701350/media/36a576751c06d476f6db6ac9250586d1.png?compress=1' alt='img' width='20%'></img>
        <h1>Chuck Norris Jokes Generator</h1>

        <button onClick={generateJoke}>Get new joke:😈 </button>
        <div className='App-p'>
          <p> {joke} </p>
        </div>

      </div>

    </div>
  );
}

export default App;



