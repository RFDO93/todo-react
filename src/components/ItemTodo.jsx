import { useState } from 'react'
import PropTypes from 'prop-types'

const ItemTodo = ({ id, title, status, handleDestroy, handleToggleStatus, funEditTodo }) => {
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

  return (
    <>
      <div className='view'>
        <input className='toggle' type='checkbox' checked={status} value={status} onChange={handleToggleStatus} />
        <label>{title}</label>
        <button className='destroy' onClick={() => handleDestroy(id)}></button>
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
  status: PropTypes.bool,
  handleDestroy: PropTypes.func,
  handleToggleStatus: PropTypes.func,
  funEditTodo: PropTypes.func
}

export default ItemTodo
