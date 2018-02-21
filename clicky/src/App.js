import React, { Component } from 'react';
import ImageCard from "./components/image";
import Title from "./components/Title";
import './App.css';
import Wrapper from "./components/Wrapper";
import color from './image.json';


class App extends Component {
  // Setting this.state.friends to the image json array
  state = {
    color
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  render() {
    return (
      <Wrapper>
        <Title></Title>
        {this.state.color.map(card => (
          <ImageCard
            // removeFriend={this.removeFriend}
            id={card.id}
            // key={friend.id}
            name={card.name}
            image={card.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
