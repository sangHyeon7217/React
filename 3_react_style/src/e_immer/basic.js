
// e_immer / 1_basic.js

import { useState } from "react";
import produce from 'immer';

/*
    * 불변성 : 원본을 변경하지 않은 상태 유지

        1> 전개연산자(...) 이용
        2> immer 라이브러리 이용

    * immer : 불변성 라이브러리

        [Current]   >   [Dreaft]            > [ New(next)]
        원본            변경후 원본과 비교       새로운객체

        새로운객체 = produce(변경대상객체, 불변성변경함수)

*/

const App = () =>{

    const [todo, setTodo] = useState([
                                { item : '밥먹기', done: true }
                                ,{ item : '숨시기', done: false }
                                ,{ item : '멍때리기', done: false }
                                ,{ item : '집중하기', done: true }
                            ])
    
    const listData = () =>{
        console.log(todo);
    }

    // 잘못된 수정
    const modifyData0 = () => {
        setTodo(()=> todo[2].item='공부하기' )
        
        //console.log('0>', todo)
    }

    // [1] ... 전개연산자
    const modifyData1 = () => {
        const temp = todo.map((data, idx)=>  (idx===2)?{...data, item:'공부하기'} : data )
        setTodo(temp)

        //console.log('1', temp)
        //console.log('1', todo)
    }
    // [2] immer의 produce()
    const modifyData2 = () => {
        
        const temp =produce(todo, (draft)=>{
            draft[2].item='밥먹고합시다'
        })

        setTodo(temp);
    }
    return(
        <div>
            <button onClick={listData}>확인</button>
            <hr/>
            <button onClick={modifyData0}>수정0</button><br/>
            <button onClick={modifyData1}>수정1</button><br/>
            <button onClick={modifyData2}>수정2</button><br/>
        </div>
    )
}

export default App;