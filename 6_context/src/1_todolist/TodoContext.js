import { useState } from "react";
import App from './components/App';

import produce from 'immer';


const TodoContext = () => {
    const [todoList, setTodoList] = useState([
        { no : 1, todo : "일어나기", done : true},
        { no : 2, todo : "씻기",    done : false},
        { no : 3, todo : "옷입기",  done : false},        
    ]);

    // [0] 함수 기존 구조만
    const addTodo       = () =>{ }
    const deleteTodo    = ()  => { }
    const toggleDone    = (no)   => {

        //alert(no)
        //1= ...
        let newTodoList =todoList.map((todo)=>{
            if(todo.no===no) todo.done = !todo.done;
            return {...todo}
        })
        setTodoList(newTodoList)

        //2= immer
     }

    return(<App todoList={todoList}
                addTodo={addTodo}
                deleteTodo={deleteTodo}
                toggleDone={toggleDone} />);

}

export default TodoContext;