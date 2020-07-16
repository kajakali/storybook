import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Library from '../Library/Library';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

class App extends Component{
  state = ({
    bookList: [],
  })

  componentDidMount(){
    //go to the database and get the library. First I have to build the database...
    axios.get(`/library`)
    .then(res => {
      const bookList = res.data;
      console.log('response', bookList)
      this.setState({ bookList})
    });
  }
  render(){
    return(
      <>
        <NavBar />
        <p>Across the top of this page should be a nav bar to let you go to the stories page
          The stories page should contain a list of stories with images
          Clicking on a story image should take you to /story with a match param of the story id...
        </p>
        <Library bookList={this.state.bookList} />
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
