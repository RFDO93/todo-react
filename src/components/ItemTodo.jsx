import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { TodoContext } from '../context/TodoContext'

const ItemTodo = ({ id, title, status }) => {
  const { functionToggleStatus, destroyTodo, funEditTodo } = useContext(TodoContext)
  const [editTodo, setEditTodo] = useState(title)

  const handleEditTodo = (e) => {
    if (e.key === 'Enter' && editTodo) {
      funEditTodo({
        id,
        title: editTodo,
        status
      })
    }
  }

  const handleDestroy = () => {
    destroyTodo(id)
  }

  const handleToggleStatus = (event) => {
    functionToggleStatus({ id, status: !status })
  }

  return (
    <>
      <div className='view'>
        <input className='toggle' type='checkbox' checked={status} value={status} onChange={handleToggleStatus} />
        <label>{title}</label>
        <button className='destroy' onClick={handleDestroy}></button>
      </div>
      <input
        className="edit"
        value={editTodo}
        onChange={(event) => setEditTodo(event.target.value)}
        onKeyDown={handleEditTodo}
      />
    </>
  )
}

ItemTodo.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.bool
}

export default ItemTodo
