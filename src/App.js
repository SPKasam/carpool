import './App.css';
import FromButton from './components/FromButton';
import ToButton from './components/ToButton';
import FromUtdCardList from './components/FromUtdCardList/FromUtdCardList';
import ToUtdCardList from './components/ToUtdCardList/ToUtdCardList';
import React, {Component} from 'react';


class App extends Component {

  constructor() {
    super();
    this.state = {
      location: "UTD"
    }
  }

  onButtonClick = (loc) => {
    this.setState({
      location: loc
    })
  } 

  render() {
    return (
      <div>
          <h1 className = "tc courier pt2"> UTD Carpool </h1>
          <div className = "flex justify-center pt2"> 
            <FromButton onButtonClick={this.onButtonClick}/>
            <ToButton onButtonClick={this.onButtonClick}/>
          </div>
          {
            (this.state.location === "UTD") ?
            <FromUtdCardList/>
            :
            <ToUtdCardList/>
          }
          
          
      </div>
    );
  }

}

export default App;
