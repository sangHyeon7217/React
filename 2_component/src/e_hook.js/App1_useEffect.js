// App1_useEffect.js

import { useState, useEffect } from "react";

/*
    # hook
        ` 함수형 컴포넌트에만 호출
        ` 반복문이나 중첩함수 안에서 호출 안됨

    # useEffect()

        ` 클래스형 컴포넌트의 lifecycle 함수의 기능 수행
    -> componentDidMount / componentDidUpdate / componentWillUnmount 와 동일한 기능 수행

        ` useEffect( 이벤트함수, 의존성배열 )

            - 의존성 배열이 없는 경우 : 컴포넌트가 업데이트 될때마다
            - 의존성 배열이 있는 경우 : 배열의 값이 변경 될 때마다 호출
            - 의존성 배열이 빈 배열인 경우 렌더링될 때 호출됨 
*/

function Form(){
    const [realname, setRealname] = useState('ㄲ')
    const [nickname, setNickname] = useState('ㅌ')

    useEffect(()=>{
        console.log(`본명: ${realname}  \t 별명: ${nickname}  \n`)

        return ()=>console.log('~~~~~For 컴포넌트가 언마운트 ')
    })

    return(
        <div>
            <div>
                <span>본명 : {realname} </span>
                <input type='text' value={realname} onChange={(evt)=>{setRealname(evt.target.value)}}></input>
            </div>

            <div>
                <span>별명 : {nickname} </span>
                <input type='text' value={nickname}
                        onChange={(evt)=>{setNickname(evt.target.value)}}
                />
            </div>
        </div>
    )
}

function App(){

    const[isVisible,setIsVisible] =useState(true);
    return(

        <div>
        <button onclick ={()=>{setIsVisible(!isVisible)}}>{isVisible?'Hide':'show'}</button>
        <hr/>
        { isVisible && <Form/> }
        <Form/>
        </div>
    )
}

export default App;