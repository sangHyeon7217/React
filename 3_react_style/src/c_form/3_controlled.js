
import { useState } from "react"

/*
    제어컴포넌트 :입력 값이 state 나 props에 의해 제어되는 컴포넌트 
            ->리엑트의 이벤트 핸들러를 이용하여 상태를 변경하고 화면의 값이 변경
    
    비제어컴포넌트: 입력 값이 state나  props에 의해 제어되지 않기 때문에 수정된 값이 상태값으로 변경 안됨

            =>HTML DOM에 직접 접근해야 함

*/
const App =() =>{

    const [x,setX]=useState(0);
    const [y,setY]=useState(0);


    return(
        <div>
            <h2>제어 커뮤포넌트</h2>
            X값:<input type='text' value={x} onChange={(e) => setX(parseInt(e.target.value))} />
            <br/>
             Y값:<input type='text' value= {y} onChange={(e) => setY(parseInt(e.target.value))}/>
        </div>
           

    )
}

export default App;