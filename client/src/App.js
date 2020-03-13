import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './components/PlayerCard';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/api/players')
        .then( response => {
          let data = response.data;
          this.setState({players: data})
        })
  }

  createPlayers = (players) => {
    return (
      players.map(item => {
        return <PlayerCard name = {item.name} country = {item.country} searches = {item.searches}/>
      })
    )
  }

  render () {
    const playersArray = this.state.players;
    console.log(playersArray)
    let players;

    if (playersArray.length > 1) {
      players = this.createPlayers(playersArray);
    } else {
      players = null;  
    }

    return (
      <div className='App'>
        <NavBar />
        {players}
      </div>
    )
  }
}

export default App;