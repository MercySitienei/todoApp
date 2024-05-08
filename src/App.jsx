import MoonIcon from "./assets/icon-moon.svg"
import SunIcon from "./assets/icon-sun.svg"
import AddForm from "./components/AddForm"
import BottomNav from "./components/BottomNav"
import { useContext } from "react"
import { ThemeContext } from "./Context/ThemeContext"
import { useState } from "react"
import Item from "./components/Item"
function App() {
  const {darkTheme, handleTheme} = useContext(ThemeContext)
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  function addTodo(text){
    const newTodo ={
      id:Date.now(),
      text: text,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  }

  // console.log({todos});
  function removeTodoById(id){
    const todoItems =todos.filter((todo)=> todo.id !== id);
    setTodos(todoItems)
  }
  function toggleTodoComplete(id){
    setTodos(todos.map(todo=>{
      if (todo.id ===id){
        return{...todo, complete: ! todo.complete}
      }
      return todo
    }))
  }

  function setFilterValue(value){
    setFilter(value)
  }
  function getTodoCount(filter){
    if(filter === 'all'){
      return todos.length
    }else if (filter === 'active'){
      return  todos.filter((todo)=> !todo.complete).length
    } else if (filter === 'complete'){
      return  todos.filter((todo)=> todo.complete).length;
    }
  }

  function clearCompletedTodos(){
    const todoItems = todos.filter(todo=> !todo.complete);
    setTodos(todoItems);
  }

  function renderTodos(){
    let filteredTodos = todos;
    if (filter === "active"){
      filteredTodos = todos.filter((todo)=> !todo.complete);
    }
      else if (filter === "complete") {
        filteredTodos = todos.filter((todo) => todo.complete)
      }
    return filteredTodos.map((todo)=>
     ( <Item 
      key={todo.id}
      itemData = {todo}
      deleteItem ={removeTodoById} 
      statusUpdate = {toggleTodoComplete} />)
    );
  }

  return <div className={`${darkTheme ? 'bg-slate-900' :'bg-[f2f2f2]'} min-h-screen pb-20 relative`}>
    <div className="bg-light_header_image_mobile lg:bg-light_header_image bg-no-repeat bg-cover h-52 px-5 lg:px-0 pt-10">
      <div className="flex justify-between lg:w-3/6 lg:mx-auto">
        <p className="text-3xl font-semibold text-white tracking-[6px]">TODO</p>
        <img onClick={handleTheme} 
        src={darkTheme ? SunIcon : MoonIcon} 
        alt="" 
        className="h-5 cursor-pointer" />
      </div>
      <div className="mt-8 lg:w-3/6 lg:mx-auto">
        <AddForm addTodo={addTodo} />
      </div>
    </div>
    <div className= {`${darkTheme ? 'bg-[#25273d]' : 'bg-white'} lg:w-3/6 lg:mx-auto mx-5 relatve -top-5 rounded-md`}>
      <BottomNav filterType= {setFilterValue}/>
      {renderTodos()}
      <div className="flex justify-between items-center px-5 h-14 text-sm lg:text-[16px] text-[#9495a5]">
        {
          todos.length > 0 ? `${getTodoCount(filter)} item` : 'Add new Todo item!!'
        }
        {
          todos.length > 0 && (
            <button
            onClick={clearCompletedTodos} 
            className="focus:font-bold" 
            type="button">
            Clear Completed
          </button>
    
            
          )
        }
      </div>
    </div>
  </div>
  
}

export default App
