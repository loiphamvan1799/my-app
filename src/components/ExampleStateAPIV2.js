import React from "react";
import ReactDOM from 'react-dom'; 

class ExampleStateAPIV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
  }

  countDown() {
    this.setState({
      index: this.state.index - 1
    });
  }

  countUp(){
    this.setState((prevState, props) => {
      return {
        index: prevState.index + 1
      }
    });
  }

  changeColor() {
    var title = document.getElementById("title");
    ReactDOM.findDOMNode(title).style.color = "red";
  }


  render() {
    return (
      <div>
        <p>Giá trị: {this.state.index}</p>
        <button onClick={() => this.countDown()}>Down</button>
        <button onClick={() => this.countUp()}>Up</button>

        //random number
        <p>Giá trị: {Math.random()}</p>
        <button onClick={() => this.forceUpdate()}>Reload</button>

        //change color use findDOmNode
        <h1 id="title">Tiêu đề</h1>
        <button onClick={() => this.changeColor()}>Change Color</button>
      </div>
    );
  }
}
 
export default ExampleStateAPIV2;