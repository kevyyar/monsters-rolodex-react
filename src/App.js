import { Component } from 'react'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState(() => {
        return {
          monsters: users
        }
      }))
  }

  handleSearchChange = (e) => {
    console.log(e.target.value)
    this.setState(() => {
      return {
        searchString: e.target.value
      }
    })
  }

  render() {
    const { monsters, searchString } = this.state
    const { handleSearchChange } = this

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchString)
    })

    return (
      <div className="container">
        <input type="text" placeholder='search monsters' onChange={handleSearchChange} />
        {filteredMonsters.map(monster => {
          return <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        })}
      </div>
    );
  }
}

export default App;
