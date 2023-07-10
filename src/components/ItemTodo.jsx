import PropTypes from 'prop-types'

const ItemTodo = ({ id, title, status, handleDestroy, handleToggleStatus }) => {
  return (
    <>
      <div className='view'>
        <input className='toggle' type='checkbox' checked={status} value={status} onChange={handleToggleStatus} />
        <label>{title}</label>
        <button className='destroy' onClick={() => handleDestroy(id)}></button>

      </div>
      <input className="edit" value={title} />
    </>
  )
}

ItemTodo.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.bool,
  handleDestroy: PropTypes.func,
  handleToggleStatus: PropTypes.func
}

export default ItemTodo
