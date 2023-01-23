import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters } = this.state;
    return(
      <div className='card-container'>
        {
          monsters.map((users) => {
            return <div id={users.id} className='card-list'>
              <h1>{users.name}</h1>
              <h2>{users.email}</h2>
              <p>{users.website}</p>
              <p>{users.address.geo["lat"]} <br></br> {users.address.geo["lng"]}</p>
              </div>;
          })
        }
      </div>
    )
  }
}

export default App;
