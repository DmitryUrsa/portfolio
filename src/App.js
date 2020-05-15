import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  state = {
    clicker: 0,
  };
  clickerIncrease = () => {
    this.setState({ clicker: this.state.clicker + 1 });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.clickerIncrease}>
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.clicker}
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
  }
}

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   let state = {
//     clicker: 0,
//   };
//   const clickerIncrease = () => {
//     state.clicker++;
//     console.log("click");
//     console.log(state.clicker);
//   };
//   return (
//     <div className="App">
//       <header className="App-header" onClick={clickerIncrease}>
//         <img src={logo} className="App-logo" alt="logo" />
//         {state.clicker}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
