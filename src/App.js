import React, {Component} from 'react';
import Cards from "./components/Cards/Cards";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import trees from "./trees.json";
import "./App.css"


class App extends Component  {
  state = {
    trees,
    score: 0,
    topScore: 0,
    idArray: []
  };

  // resets game
  endGame = () => {
    this.setState({score: 0, idArray: []});
    this.highScore();
    }

  highScore = () => {
    //check to see if current score is higher than topSCore
    if(this.state.score > this.state.topScore) {
      alert("New high score: " + this.state.score)
      this.setState({ topScore: this.state.score})
    } else 
    this.setState({ topScore: this.state.topScore})
  }
  shuffle = () => {
    // re arrange trees array each time a card is clicked which will re arrange cards
    for(let i = this.state.trees.length -1; i> 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.trees[i], this.state.trees[j]] = [this.state.trees[j], this.state.trees[i]]
    }
    this.setState({ trees: this.state.trees});
  }

  changeClickedStatus= id => {
    console.log(id)
    
    // checks to see if card id is in idArray if it does game ends saves high score
    // if not adds to idArray and shuffles cards
    if(this.state.idArray.includes(id)) {
       this.endGame();
    } else {
      this.state.idArray.push(id);
      this.shuffle();
      this.setState({ score: this.state.score + 1 })
    }
      }

  


render() {
  return (
    <Wrapper>
    <Navbar score={this.state.score} topScore={this.state.topScore} />
    <Header></Header>
    <div className="card-wrapper">
    {/*map function to render all cards */}
    {this.state.trees.map(tree => (
      <Cards
      id={tree.id}
      image={tree.image}
      // handleIncrement={this.handleIncrement}
      changeClickedStatus={this.changeClickedStatus}
      />
    ))}
    </div>
    <Footer />
  </Wrapper>
  );
}
};

export default App;

