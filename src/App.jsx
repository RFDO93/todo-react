import { useState, useRef } from 'react'
import Footer from './components/Footer'
import ListTodo from './components/ListTodo'
import { FILTERS, listTODO } from './constant/constant'
import Header from './components/Header'

function App () {
  const [listTodo, setListTodo] = useState(listTODO)
  const [filter, setFilter] = useState(FILTERS.all)
  const [todoViewEdit, setTodoViewEdit] = useState(null)
  const listTodoFilter = useRef(listTODO)

  const handleDestroy = (id) => {
    const newListTodo = listTodo.filter(todo => todo.id !== id)
    listTodoFilter.current = newListTodo
    setListTodo(newListTodo)
  }

  const handleToggleStatus = (id) => {
    const newListTodo = listTodo.map(todo => {
      if (todo.id === id) {
        todo.status = !todo.status
      }
      return todo
    })
    listTodoFilter.current = [...newListTodo]
    setListTodo([...newListTodo])
  }

  const handleFilter = (typeFilter) => {
    let newListTodo = []

    switch (typeFilter) {
      case FILTERS.active:
        newListTodo = listTodoFilter.current.filter(todo => !todo.status)
        break
      case FILTERS.completed:
        newListTodo = listTodoFilter.current.filter(todo => todo.status)
        break
      default:
        newListTodo = listTodoFilter.current
        break
    }

    setFilter(typeFilter)
    setListTodo(newListTodo)
  }

  const handleRemoveComplete = () => {
    const newListTodo = listTodo.filter(todo => !todo.status)
    listTodoFilter.current = newListTodo
    setListTodo(newListTodo)
  }

  const handleCreateTodo = (newTodo) => {
    if (!newTodo) {
      return
    }

    const newListTodo = listTodoFilter.current

    newListTodo.push({
      id: crypto.randomUUID(),
      title: newTodo,
      status: false
    })

    setListTodo([...newListTodo])
    listTodoFilter.current = [...newListTodo]
  }

  const handleClickEdit = (id) => {
    setTodoViewEdit(id)
  }

  const handleEditTodo = (newTodo) => {
    const newListTodo = listTodo.map(todo => {
      if (todo.id === newTodo.id) {
        todo = newTodo
      }
      return todo
    })
    listTodoFilter.current = [...newListTodo]
    setListTodo([...newListTodo])
    setTodoViewEdit(null)
  }

  return (
    <main className="todoapp">
      <Header
        createTodo={handleCreateTodo}
      />
      <section className="main">
        <ListTodo
          listTodo={listTodo}
          handleDestroy={handleDestroy}
          handleToggleStatus={handleToggleStatus}
          todoViewEdit={todoViewEdit}
          clickEdit={handleClickEdit}
          funEditTodo={handleEditTodo}
        />
      </section>
      <Footer
        numTodo={listTodo.length}
        filter={filter}
        handleFilter={handleFilter}
        handleRemoveComplete={handleRemoveComplete}
      />
    </main>
  )
}

export default App
