import React, { useState } from 'react'
import '../styles/style.css'

function App() {

  //Запрашиваем данные
  let newText
  let text

  function headText() {
    text = document.querySelector('.text')
    newText = prompt('New text');
    text.innerHTML = newText
  }

  function User(name, age, isHappy) {
    return {
      name,
      age,
      isHappy
    }
  }

  let newData = () => {
    getName = prompt('Name?')
    getAge = +prompt('Age?')
    getHappy = prompt('He is happy?')
  }

  let getName
  let getAge
  let getHappy

  let cloneUser = new User(getName, getAge, getHappy)
  //Инкремент и декремент

  let [click, setClick] = useState(0)
  let textIncrement = useState('')

  function increment() {
    setClick(click + 1)
  }

  function decrement() {
    setClick(click - 1)
  }

  if (click === 6) {
    decrement();
  } else if (click === -1) {
    increment()
  }

  if (click === 5) {
    textIncrement = 'MAX!!!'
  }

  return (
    <div className="App">
      <button onClick={headText}>New Text</button>
            <h1 className='text'>{newText}</h1>
      <br /><br />
      <button onClick={newData}>Data</button>
      <button onClick={() => {console.log(cloneUser);}}>Console user</button>
      <br /><br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h2>{click}</h2>
      <h2>{textIncrement}</h2>
    </div>
  );
}

export default App;