import ItemTodo from './ItemTodo'
import PropTypes from 'prop-types'

const ListTodo = ({ listTodo, todoViewEdit, handleDestroy, handleToggleStatus, clickEdit, funEditTodo }) => {
  const handleClickEdit = (event, id) => {
    if (event.detail === 2) {
      clickEdit(id)
    }
  }

  return (
    <ul className='todo-list'>
      {listTodo.map((todoItem) => {
        return <li
          key={`itemTodo-${todoItem.id}`}
          className={`${todoItem.status ? 'completed' : ''} ${todoItem.id === todoViewEdit ? 'editing' : ''}`}
          onClick={(e) => handleClickEdit(e, todoItem.id)}
        >
          <ItemTodo
            title={todoItem.title}
            id={todoItem.id}
            status={todoItem.status}
            handleDestroy={handleDestroy}
            handleToggleStatus={() => handleToggleStatus(todoItem.id)}
            funEditTodo={funEditTodo}
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
  handleToggleStatus: PropTypes.func,
  clickEdit: PropTypes.func,
  funEditTodo: PropTypes.func
}

export default ListTodo
