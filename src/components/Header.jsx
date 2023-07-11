import { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const Header = () => {
  const [newTodo, setNewTodo] = useState('')
  const { createTodo } = useContext(TodoContext)

  const handleCreateTodo = (e) => {
    if (e.key === 'Enter') {
      createTodo(newTodo)
      setNewTodo('')
    }
  }

  return (
    <header className="header">
      <h1>TODO</h1>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="new-todo"
        onKeyDown={handleCreateTodo}
        placeholder="Ingresa un nuevo todo"
      />
    </header>
  )
}

export default Header
