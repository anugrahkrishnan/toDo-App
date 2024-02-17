import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [toDo,setTodo]=useState('')
  const [toDos,setTodos]=useState([])
  const [day, setDay] = useState('')
  useEffect(() => {
    const currentDate = new Date()
    const dayOfWeek = currentDate.getDay()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    setDay(days[dayOfWeek])
  }, [])
  const d = new Date()
  const updateArray = () => {setTodos(prevToDos => [...prevToDos,{id:d.getTime(),name:toDo,state:false,click:false}])}
  const dummy=[...toDos]
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={updateArray} className="fas fa-plus"></i>
      </div>
      {console.log(toDos)}
      <br />
      <h2>Active Tasks</h2>
      <div className="todos">
        {toDos.map((obj)=>{
          if(!obj.state && !obj.click){
        return(
          <div className="todo">
            <div className="left">
              <input onChange={
                (e) => { const index = dummy.findIndex((obj2) => obj2.id === obj.id);
              if (index !== -1)
              {dummy[index].state = e.target.checked;
                setTodos(dummy)
              
            }}} 
            value={obj.state} type="checkbox" name="" id="" />
              <p>{obj.name}</p>
            </div>
            <div className="right">
              
              <i onClick={()=>{ const index1 = dummy.findIndex((obj3)=> obj3.id===obj.id);
              dummy[index1].click=true;
              setTodos(dummy);}} className="fas fa-times"></i>
            </div>
          </div>
        )}
        else
        return null
        })}
      </div>
      <br />
      <h2>Completed Tasks</h2>
      {toDos.map((obj)=> {
        if(obj.state){
        return(
          <div className="todos">
            <div className="ctb">
              <p>{obj.name}</p>
              
            </div>
          </div>
        )}
        else
        return null
        })}
      <br />
      <h2>Deleted Tasks</h2>
      
      {toDos.map((obj)=> {
        
        if(obj.click){
        return(
          <div className="todos">
            <div className="dtb">
              <p>{obj.name}</p>
              
            </div>
          </div>
        )}
        else
        return null
        })}
    </div>
  );
}

export default App;
