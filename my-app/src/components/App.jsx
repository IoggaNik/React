import React, { useState } from 'react'
import '../styles/style.css'

const App = () => {
  //Новый заголовок
  let newText
  let text

  let headText = () => {
    text = document.querySelector('.text')
    newText = prompt('New text');
    text.innerHTML = newText
  }
  //Запрашиваем данные

  let data = () => {

    function User(name, age) {
      return {
        name: name,
        age: age
      }
    }

    let getName = prompt('Name?')
    let getAge = prompt('Age?')

    let cloneUser = new User(getName, getAge)

        console.log(cloneUser);
  }
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
      <button onClick={data}>Data</button>
      <br /><br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h2>{click}</h2>
      <h2>{textIncrement}</h2>
    </div>
  );
}

export default App;