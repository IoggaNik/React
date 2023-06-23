import React, { useState } from 'react'
import '../styles/style.css'

function App() {

  //Запрашиваем данные
  function data() {
      function User(name, age, isHappy) {
    return {
      name: name,
      age: age,
      isHappy: isHappy
    }
  }

  let getName = prompt('Введите имя')
  let getAge = +prompt('Введите возраст')
  let getHappy = prompt('Он счастлив?')

  let user = new User(getName, getAge, getHappy)

  console.log(user);
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
      <button onClick={data}>CLICK</button>
      <br /><br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h2>{click}</h2>
      <h2>{textIncrement}</h2>
    </div>
  );
}

export default App;