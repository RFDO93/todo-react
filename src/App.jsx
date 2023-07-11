import Footer from './components/Footer'
import ListTodo from './components/ListTodo'
import Header from './components/Header'

function App () {
  return (
    <main className="todoapp">
      <Header />
      <section className="main">
        <ListTodo />
      </section>
      <Footer />
    </main>
  )
}

export default App
