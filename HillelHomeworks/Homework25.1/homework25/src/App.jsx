import { useState, useEffect } from 'react'
import './App.css'
import SmileCard from './components/SmileCard';
import Button from './components/Button';


function App() {
  const [emoji, setEmoji] = useState([]);
  const [winner, setWinner] = useState(null);

  const loadData = async () => {
    const response = await fetch('http://localhost:5173/emoji.json');
    const result = await response.json();
    setEmoji(result);
  }

  useEffect(() => {
    loadData();
  }, [])


  const handleVote = (id) => {
    const updateArr = emoji.map((el) => { 
      if (el.id === id) {
        return {...el, votes: el.votes + 1}
      } else {
        return el;
      }
  });

  setEmoji(updateArr);
  }

  const showResults = () => {
    const biggestVotes = Math.max(...emoji.map(el => el.votes));
    const winnerEmoji = emoji.find(el=> el.votes === biggestVotes);
    setWinner(winnerEmoji);
  }

  return (
    <div className='emoji'>
        <h1 className='emoji__title'> Vote for your favorite smile </h1>
        <div className='emoji__list'>
          {emoji.map(el=>(
            <SmileCard onVote={()=> handleVote(el.id)} emoji={el} key={el.id}/>
          ))}
        </div>
        <Button showResults={showResults}/>

        {winner && winner.votes > 0 ? (
        <div className="emoji__winner">
          <h2>Winner: {winner.name}</h2>
          <img src={winner.path} />
          <p>Votes: {winner.votes}</p>
        </div>
        ) : (
          <p>To show results you need to vote</p>
        )}
    </div>
  )
}

export default App


// const emojisFromBackend = [
// 	{ "id: 1, "name": "Dodo", "path": "/assets/Dodo.svg", "votes": 0 },
// 	{
// 		"id": 2,
// 		"name": "Cowboy",
// 		"path": "/assets/CowboyFace.svg",
// 		"votes": 0
// 	},
// 	{
// 		"id": 3,
// 		"name": "Devil",
// 		"path": "/assets/WithHorns.svg",
// 		"votes": 0
// 	},
// 	{
// 		"id": 4,
// 		"name": "Love",
// 		"path": "/assets/WithHeartEyes.svg",
// 		"votes": 0
// 	},
// 	{
// 		"id": 5,
// 		"name": "Cool",
// 		"path": "/assets/WithSunglasses.svg",
// 		"votes": 0
// 	}
// ]