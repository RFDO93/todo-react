const Footer = () => {
  return (
    <div className="footer">
      <span className="todo-count">
        <strong>0</strong> items
      </span>
      <ul className="filters">
        <li>
          <a href="#">Todos</a>
        </li>
        <li>
          <a href="#">Activos</a>
        </li>
        <li>
          <a href="#">Completados</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
