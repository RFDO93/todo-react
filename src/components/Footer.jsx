import { useContext } from 'react'
import { FILTERS } from '../constant/constant'
import { TodoContext } from '../context/TodoContext'

const Footer = () => {
  const { filter, numTodo, handleFilter, handleRemoveComplete } = useContext(TodoContext)

  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{numTodo}</strong> items
      </span>
      <ul className="filters">
        <li>
          <a
            className={`${filter === FILTERS.all ? 'selected' : ''}`}
            href="#"
            onClick={() => handleFilter(FILTERS.all)}
          >Todos</a>
        </li>
        <li>
          <a
            className={`${filter === FILTERS.active ? 'selected' : ''}`}
            href="#active"
            onClick={() => handleFilter(FILTERS.active)}
          >Activos</a>
        </li>
        <li>
          <a
            className={`${filter === FILTERS.completed ? 'selected' : ''}`}
            href="#completed"
            onClick={() => handleFilter(FILTERS.completed)}
          >Completados</a>
        </li>
      </ul>
      <button className='clear-completed' onClick={handleRemoveComplete}>Eliminar completado</button>
    </div>
  )
}

export default Footer
