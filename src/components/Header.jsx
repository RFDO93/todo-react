import PropTypes from 'prop-types'
import { useState } from 'react'

const Header = ({ createTodo }) => {
  const [newTodo, setNewTodo] = useState('')

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

Header.propTypes = {
  createTodo: PropTypes.func
}

export default Header
