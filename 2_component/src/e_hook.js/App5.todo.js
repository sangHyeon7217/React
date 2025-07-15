// App5_todo.js

/*
    랜더링 성능 향상
        - useMemo()
        - useCallback()
*/

import { useCallback, useMemo, useState } from 'react';
import '../App.css';

const App = () =>{

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addTodo = useCallback(todo =>{
        const newTodoList = [...todoList, {id:new Date().getTime(), todo: todo}]
        setTodoList(newTodoList);
        setTodo('')
    },[todo,todoList])

    const getTodoListCount = todoList =>{
        return todoList.length;
    }

    const resultCount = useMemo( ()=> getTodoListCount(todoList),[todoList]);

    const deleteTodo = useCallback(id =>{
        let idx =  todoList.findIndex( item => item.id===id );
        console.log(idx)

        let newTodoList = [...todoList]
        newTodoList.splice(idx, 1)

        setTodoList(newTodoList);
    },[todoList])

    return(
        <div className="App">
            <input type='text' value={todo} onChange={(evt)=> setTodo(evt.target.value )}/>
            <button onClick={()=> addTodo(todo)}>할일 추가</button>
            <hr/>
                <div className='App-subtitle'> 남은 할일의 갯수2 : {resultCount}</div>
            <hr/>

            {/* 여기에 할일 목록 출력 */}
            <ul>
                {
                    todoList.map((item)=> {
                      return (
                        <li key={item.id}>
                            <span>{item.todo}</span>
                            <button onClick={()=> deleteTodo(item.id)}>삭제</button>
                        </li>
                      )
                    })
                }
            </ul>
        </div>
    )
}

export default App;