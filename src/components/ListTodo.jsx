import { useAutoAnimate } from '@formkit/auto-animate/react'
import ItemTodo from './ItemTodo'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const ListTodo = () => {
  const { listTodo, todoViewEdit, clickEdit } = useContext(TodoContext)
  const [animationParent] = useAutoAnimate()

  const handleClickEdit = (event, id) => {
    if (event.detail === 2) {
      clickEdit(id)
    }
  }

  return (
    <ul className='todo-list' ref={animationParent}>
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
          />
        </li>
      })}
    </ul>
  )
}

export default ListTodo
