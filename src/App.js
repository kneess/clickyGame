import React, {Component} from 'react';
import Cards from "./components/Cards/Cards";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import trees from "./trees.json"

class App extends Component  {
  state = {
    trees,
    score: 0,
    topScore: 0,
    idArray: []
  };

  //  // handleIncrement increases this.state.count by 1
  //  handleIncrement = event => {
  //   //  console.log(this.state.isClicked)
  //   event.preventDefault();
  //   // We always use the setState method to update a component's state
  //   this.setState({ score: this.state.score + 1 });
  // };
  endGame = () => {
    this.setState({score: 0, idArray: []});
    this.highScore();
    }
  highScore = () => {
    if(this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score})
    } else 
    this.setState({ topScore: this.state.topScore})
  }

  changeClickedStatus= id => {
    console.log(id)
    
   
    const newArray = this.state.idArray;
    console.log("newArray", newArray);
   
    if(this.state.idArray.includes(id)) {
       this.endGame();
    } else {
      newArray.push(id);
      this.setState({ score: this.state.score + 1 })
    }
      // newState = {
      // score: this.state.score + 1,
      // topScore: this.state.topScore + 1,
      //   }  
   
      // this.setState(newState);
      // console.log("newState", newState);
      // this.randomize();
      }
  


render() {
  return (
    <Wrapper>
    <Navbar score={this.state.score} topScore={this.state.topScore} />
    {this.state.trees.map(tree => (
      <Cards
      id={tree.id}
      image={tree.image}
      // handleIncrement={this.handleIncrement}
      changeClickedStatus={this.changeClickedStatus}
      />
    ))}
    <Footer />
  </Wrapper>
  );
}
};

export default App;

