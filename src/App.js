import './App.css';
import React from 'react';
import ItemCard from './components/ItemCard';

function App() {

  const[todoItems, setTodoItems] = React.useState([])
  const[newItem, setNewItem] = React.useState("")

  function handleChange(event){
    const {value} = event.target

    setNewItem(value)
  }

  function handleAdd(){
    if(newItem !== ""){
      setTodoItems(prevToDoItems => {
        return(
          [
            ...prevToDoItems, {id: todoItems.length, value: newItem, checked: false}
          ]
        )
      })
    }

    setNewItem("")
  }

  function handleDelete(id){
    const newToDoItems = todoItems.filter(item => item.id !== id)
    setTodoItems(newToDoItems)
  }

  function handleCheck(id){
    
    let newItems = []
    
    for(let i = 0; i < todoItems.length; i++){
      
      let newItem = todoItems[i]

      if(newItem.id === id){
        newItem.checked = !newItem.checked
      }

      newItems.push(newItem)
    }
    
    setTodoItems(newItems)
    
  }

  const todoItemCards = todoItems.map(item => {
    return(
      <ItemCard 
        id={item.id}
        item={item.value}
        checked={item.checked}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    )
  })

  return (
    <div>
      <div className="body">
        <h1 className='title'>To-do list</h1>
        <div className='add-item'>
          <input 
            type="text"
            className='add-item--input'
            placeholder='Add to-do item...'
            onChange={handleChange}
            value={newItem}
          />
          <button
            className='add-item--button'
            onClick={handleAdd}
          >Add</button>
        </div>
        <div className='todo-items'>
          {todoItemCards}
        </div>
      </div>
      {/* <div className="footer">
            <p>
                Created by Jack Potter
            </p>
            <a href="https://jackpotterdeveloper.com/" target='_blank'>www.jackpotter-developer.com</a>
      </div> */}
    </div>
  );
}

export default App;
