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
    isClicked: false
  };

   // handleIncrement increases this.state.count by 1
   handleIncrement = event => {
    event.preventDefault();
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  


render() {
  return (
    <Wrapper>
    <Navbar score={this.state.score} topScore={this.state.topScore} />
    {this.state.trees.map(tree => (
      <Cards
      id={tree.id}
      image={tree.image}
      handleIncrement={this.handleIncrement}
      isClicked={this.state.isClicked}
      />
    ))}
    <Footer />
  </Wrapper>
  );
}
};

export default App;

