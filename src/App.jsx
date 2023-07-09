import { useState } from 'react'
import Footer from './components/Footer'
import ListTodo from './components/ListTodo'
import { listTODO } from './constant/listTodo'

function App () {
  const [listTodo, setListTodo] = useState(listTODO)

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

  return (
    <main className="todoapp">
      <h1>TODO</h1>
      <section className="main">
        <ListTodo listTodo={listTodo} handleDestroy={handleDestroy} handleToggleStatus={handleToggleStatus} />
      </section>
      <Footer />
    </main>
  )
}

export default App
