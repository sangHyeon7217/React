


/*
    제어컴포넌트 :입력 값이 state 나 props에 의해 제어되는 컴포넌트 
            ->리엑트의 이벤트 핸들러를 이용하여 상태를 변경하고 화면의 값이 변경
    
    비제어컴포넌트: 입력 값이 state나  props에 의해 제어되지 않기 때문에 수정된 값이 상태값으로 변경 안됨

            =>HTML DOM에 직접 접근해야 함

*/

import { useRef, useState } from "react";

const App=()=>{

    //HTML DOM에 직접 접근하기 위해
    const eleX = useRef(null);
    const eleY = useRef(null);

    const [result, setResult] =useState(0);
    
    const add=()=>{
        setResult(parseInt(eleX.current.value)+parseInt(eleY.current.value) ) 
    }


    return(
        <div>
                <h2>비제어 컴포넌트</h2>
                X값: <input type='text' ref={eleX}/><br/>
                Y값: <input type='text'ref={eleY}/><br/>
                <hr/>
                <button onClick={add}>계산하기</button>
                결과 :{result}
        </div>
    )

}

export default App;