import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       // <div className="App">
//       //   <div className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <h2>Welcome to React</h2>
//       //   </div>
//       //   <p className="App-intro">
//       //     To get started, edit <code>src/App.js</code> and save to reload.
//       //   </p>
//       // </div>

//       <div>
//         </div>
//     );
//   }
// }
const  App = ()  => {
 
  const [list, addList] = useState([])

  const todoChange = (e) =>{
    if(e.currentTarget.value ) {
      const temp = [...list, e.currentTarget.value]
      addList(temp)
    }
    e.currentTarget.value = ''
  } 
  const deleteTodo = (value) => {
    const removedItem = list.filter(item => item != value)
    addList(removedItem)
  }
  return(
  
    <div>
     {list.length === 0 ? <h3>no todos</h3>:   <ul>
      { list.map(value =>  <li key={value}> {value} <button onClick={() => deleteTodo(value)}>Delete</button> </li>)}
    </ul>  }

     <input type='text' onBlur={todoChange}/>
     {/* <button onClick={() => addList(items)}>Add</button> &nbsp; */}
    
    </div>
  )
}
export default App;
