import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Library from '../Library/Library';
import Story from '../Story/Story';
import Home from '../Home/Home';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


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
     
        <Router>
        <h2>I'm the Nav Bar!</h2>

<Link to='/'>Home</Link>
<Link to='/library'>Library</Link>

<p>Across the top of this page should be a nav bar to let you go to the stories page
The stories page should contain a list of stories with images
Clicking on a story image should take you to /story with a match param of the story id...
here's the props: {JSON.stringify(this.props)}
</p>


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/library">
              <Library bookList={this.state.bookList} history={this.props.history}/>
            </Route>
            <Route path='/story/:id' component={Story} />
            
          </Switch>
        </Router>

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
