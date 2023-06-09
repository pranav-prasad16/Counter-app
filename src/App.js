import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
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


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 8 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 1 },
    ],
  };
  
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // console.log("Event handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() { 
    return (
      <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter(c => c.value >0).length}></NavBar>
       <main className='container'>
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement} 
        onDelete={this.handleDelete}>
        </Counters></main>
      </React.Fragment>
    );
  }
}
 
export default App;