
/*
 [1] && 연산자 -> if문 동일한 효과

    true  && expression => expression
    false && expression => false
    

 [2] 삼항연산자 if~else 동일한 효과

   조건 ? 참일경우 : 거짓인 경우


*/

import { useState } from "react";

function Counter(props){

    const [count,setCount] =useState(0);

    return(
        <div>
                {count && <h3>현재 카운트:{count}</h3>}
                <hr/>
                <button onCLick={()=>setCount((count)=>count+1 )}>눌러</button>

        </div>
    )
}

function MailBox(props){
    
    const unreadMessage =props.datal

    return (
        <div>

            <h1>나의 메일함</h1>
            {
                unreadMessage > 0 &&
                    <h3>
                        현재 {unreadMessage.lenth}개의 읽지 않은 메세지가 있습니다
                    </h3>
            }
            
        </div>
    )
}

function App(){

    var msg =[]
    var msg2= ['광고메일','회의메일','안부메일']

    return(
        <div>
            <counter/>

            <hr/>
            <MailBox data={msg} />
            <MailBox data={msg2} />
        </div>
    )
}

export default App;