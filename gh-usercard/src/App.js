import React from 'react';
import axios from 'axios';
import CardList from './Components/CardList';
import FollowerCardList from './Components/FollowerCardList'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      followerData: []
    };
  };

  componentDidMount() {
    //axios call for my data
    axios.get('https://api.github.com/users/damonbogich')
    .then(response => {
      // console.log(response);
      this.setState({myData: response.data});

    })
    axios.get('https://api.github.com/users/damonbogich/followers')
    .then(response => {
      // console.log('followers here', response);
      this.setState({followerData: response.data})
    })
  }

  render() {
    // console.log("Look here", this.state.followerData)
    return (
      
      <div>
        <CardList
        myData = {this.state.myData}/>
        <FollowerCardList
        followerData = {this.state.followerData}/>
      </div>

    );

  }
}

export default App;
