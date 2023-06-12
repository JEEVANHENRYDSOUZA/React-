import React ,{useState, useEffect} from 'react'
import { TodoForm } from './todoform';
import { Todo } from './todo';
function Todowrapper() {
    const [todos,setTodos]=useState([])
    const [data1,setData1]=useState([]);

    useEffect(()=>{

            jeevan();

    },[]);



    async function jeevan(){

        
      
    const json1=await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING');
    const data= await json1.json();    

    setData1(data);
    console.log(data1);
    }

    const addtodo=todo=>{
        setTodos([...todos,{task:todo,id:Math.floor(Math.random() * 10000),completed:false,isEditing:false}])
        console.log(todos);
    }
  return (
    <div className='Todowrapper'>
      {console.log(data1)}
        <TodoForm  addTodo={addtodo}/>
        {todos.map((todo) =>
            (
              <Todo
                key={todo.id}
                task={todo}
                
              />
            )
          )}
    </div>
  )
}

export default Todowrapper;
