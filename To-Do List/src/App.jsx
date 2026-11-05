
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <>
      <div id="app">
        <Header/>
        <div id="list-container">
          <ToDoList/>
        </div>
      </div>  
    </>
  )
}

export default App
