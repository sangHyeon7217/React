
/**
 *  useState() :state 생성하는 함수
 *           state :값 변경하여 렌더링 되는 변수
 * 
 * **/

import { useState } from "react";

const App=()=>{
   
    const[msg,setMsg] =useState('인사말을 입력하세요');

    return(
        <div>
            <input type = 'text' onChange={(e)=>{setMsg(e.target.value)}}></input>
            <br/>       
        <div>입력 메세지:{msg}</div>
        </div>
        
    )

}

export default App;