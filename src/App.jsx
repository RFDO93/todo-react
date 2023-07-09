import { useState } from 'react'
import Footer from './components/Footer'
import ListTodo from './components/ListTodo'
import { FILTERS, listTODO } from './constant/constant'

function App () {
  const [listTodo, setListTodo] = useState(listTODO)
  const [filter, setFilter] = useState(FILTERS.all)

  const handleDestroy = (id) => {
    const newListTodo = listTodo.filter(todo => todo.id !== id)
    setListTodo(newListTodo)
  }

  const handleToggleStatus = (id) => {
    const newListTodo = listTodo.map(todo => {
      if (todo.id === id) {
        todo.status = !todo.status
      }
      return todo
    })
    setListTodo([...newListTodo])
  }

  const handleFilter = (typeFilter) => {
    let newListTodo = []

    switch (typeFilter) {
      case FILTERS.active:
        newListTodo = listTODO.filter(todo => !todo.status)
        break
      case FILTERS.completed:
        newListTodo = listTODO.filter(todo => todo.status)
        break
      default:
        newListTodo = listTODO
        break
    }

    setFilter(typeFilter)
    setListTodo(newListTodo)
  }

  return (
    <main className="todoapp">
      <h1>TODO</h1>
      <section className="main">
        <ListTodo
          listTodo={listTodo}
          handleDestroy={handleDestroy}
          handleToggleStatus={handleToggleStatus}
        />
      </section>
      <Footer
        numTodo={listTodo.length}
        filter={filter}
        handleFilter={handleFilter}
      />
    </main>
  )
}

export default App
