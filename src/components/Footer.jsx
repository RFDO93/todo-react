import PropTypes from 'prop-types'
import { FILTERS } from '../constant/constant'

const Footer = ({ filter, numTodo, handleFilter, handleRemoveComplete }) => {
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

Footer.propTypes = {
  filter: PropTypes.string,
  numTodo: PropTypes.number,
  handleFilter: PropTypes.func,
  handleRemoveComplete: PropTypes.func
}

export default Footer
