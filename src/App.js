import React from 'react';
import CounterClass from './CounterClass'
import CounterHook from './CounterHook'
import Toggler from './Toggler'
import SWMovies from './SWMovies'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Party</h1>
      {/* <CounterClass />
      <CounterHook />
      <Toggler /> */}
      <SWMovies />
      </header>
    </div>
  );
}

export default App;



class Dog {
  constructor() {
    this.sound = 'wwof'
  }
  talk() {
    console.log(this.sound)
  }
}

const sniffles = new Dog()
sniffles.talk() // 'woof'


// functional componenet (or facotory function that creates class)

const dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}

const sniffles = dog()
sniffles.talk() // 'woof'