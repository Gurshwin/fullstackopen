import { useState } from 'react'

const randomString =()=>{
const randomIndex = Math.floor(Math.random()*anecdotes.length);
setSelected(randomIndex);
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
}
function Display({ text }) {
  return <p>{text}</p>;
} 
const Button = (props) => {
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const votes = { 0: 1, 1: 3, 2: 4, 3: 2 }

const copy = { ...votes }
// increment the property 2 value by one
copy[2] += 1    
// log the updated copy
console.log(copy) 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  return (
    <div>
      <Header text="Anecdote of the day" /> 
      
      
      {anecdotes[selected]}<br/>
      <Button text="Next Anecdote" onClick={() => setSelected((selected + 1) % anecdotes.length)} />
      <Button text="Vote" onClick={() => setVotes(votes.map((v, i) => i === selected ? v + 1 : v))} />
      <Display text={`Votes: ${votes[selected]}`} />
      <Header text="Anecdotes with most votes" />
      <Display text={anecdotes[votes.indexOf(Math.max(...votes))]} />
      <Display text={`Votes: ${Math.max(...votes)}`} />
         
      
    </div>
  )
}

export default App