

/*
    useRef()

        React는 가상돔을 만들어서 실제 브라우저하고 바뀐값만 확인하고 바뀐 부분만 바꿈

        [1] useRef()로 리턴값은 객체는컴포넌트의 모는생명주기 동안 유지됨
                ->ref객체가 변경되더라도 렌더링되지 않는다
                그러나 useState()의 렌더링이 일어나면 화면에 값이 변경됨
        [2] 브라우저 DOM 요소에 직접 접근 가능
*/

import { useState,useRef } from "react";


const App= () =>{
    const [realname,setRealname] = useState('홍길동')

    //usRef()
    const refNickname =useRef(' 산적')

    return(
            <div>
                    <h2>데어타 상태</h2>
                    <div>
                        <span>본명:{realname}</span>
                        <input type ='text' onChange={(evt)=>{setRealname(evt.target.value )}}/>

                    </div>
                    <div>
                        <span>별명:{refNickname.current}</span>
                        <input type ='text' onChange={(evt)=>{refNickname.current =evt.target.value}}></input>
                    </div>

            </div>

    )


}



export default App;