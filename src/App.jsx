import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const [items, setItems] = useState([]);

  let input = null;
  let inputRef = useRef()

  let todoInput = function (event) {
    input = event.target.value;
    
    };

  let todoAdd = () => {
    setItems([...items, input]);
    inputRef.current.value = "";
  }
  let deleteItem = (index) => {
    let filteredItem = items.filter((_,i) => i != index);
    setItems(filteredItem);
  }
  return (
    <>
      <div class="app">
        <h3 class="h2S">TODO APP</h3>
        <div clase="inputsec">
          <input ref={inputRef} onChange={todoInput} placeholder='Type To-Do' /> 
          <button onClick={todoAdd}> ADD</button>
        </div>
        <div className='tcon'> 
          {items.map((item,i) => (
          <div className='tresult'><div class='todo'>{item}</div>
          <button className='tbtn' onClick={() => deleteItem(i)}> DEL</button>
          <button className='tbtn'> EDIT</button></div>))}
        </div>
      </div>
    </>
  )
}

export default App
