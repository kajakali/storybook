import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Library from '../Library/Library';
import NavBar from '../NavBar/NavBar';

class App extends Component{
  state = ({
    library: [{name: "book1", image: "image1"}, {name: "book2", image: "image2"}]
  })

  componentDidMount(){
    //go to the database and get the library. First I have to build the database...
  }
  render(){
    return(
      <>
        <NavBar />
        <p>Across the top of this page should be a nav bar to let you go to the stories page
          The stories page should contain a list of stories with images
          Clicking on a story image should take you to /story with a match param of the story id...
        </p>
        <Library library={this.state.library} />
      </>
    )
  }
}
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


    </div>
  );
} */

export default App;
