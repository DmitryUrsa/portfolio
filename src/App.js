import React, { Component } from "react";
import "./App.css";
import Header from "./modules/Header";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
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
