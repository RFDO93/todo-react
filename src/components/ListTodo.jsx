import ItemTodo from './ItemTodo'
import PropTypes from 'prop-types'

const ListTodo = ({ listTodo, todoViewEdit, handleDestroy, handleToggleStatus }) => {
  return (
    <ul className='todo-list'>
      {listTodo.map((todoItem) => {
        return <li
          key={`itemTodo-${todoItem.id}`}
          className={`${todoItem.status ? 'completed' : ''} ${todoItem.id === todoViewEdit ? 'editing' : ''}`}
        >
          <ItemTodo
            title={todoItem.title}
            id={todoItem.id}
            status={todoItem.status}
            handleDestroy={handleDestroy}
            handleToggleStatus={() => handleToggleStatus(todoItem.id)}
          />
        </li>
      })}
    </ul>
  )
}

ListTodo.propTypes = {
  listTodo: PropTypes.array,
  todoViewEdit: PropTypes.string,
  handleDestroy: PropTypes.func,
  handleToggleStatus: PropTypes.func
}

export default ListTodo
