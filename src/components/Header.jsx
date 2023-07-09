import PropTypes from 'prop-types'

const Header = ({ newTodo, handleChangeNewTodo }) => {
  return (
    <header className="header">
      <h1>TODO</h1>
      <input
        value={newTodo}
        onChange={(text) => handleChangeNewTodo(text)}
        className="new-todo"
        placeholder="Ingresa un nuevo todo"
      />
    </header>
  )
}

Header.propTypes = {
  newTodo: PropTypes.string,
  handleChangeNewTodo: PropTypes.func
}

export default Header
