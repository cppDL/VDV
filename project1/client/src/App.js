import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import TodoItem from './TodoImtem'

function App() {

  const [todoList, setTodoList] = useState(null)

  useEffect(() => {
    async function getList(){
      const res = await axios.get(`http://127.0.0.1:8000`)
      if (res.status === 200)
        setTodoList(res.data)
    }
    getList()
  },[])

  const todoElem = todoList && todoList.map(elem => {
    return(
      <TodoItem name={elem.name} description={elem.description} />
    )
  })

  return (
    <div className="App">
      {todoList && todoElem}
    </div>
  );
}

export default App;
