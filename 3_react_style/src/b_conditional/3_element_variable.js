

//엘리먼트 변수: 엘리먼트를 변수에 저장(지정)

import { useState } from "react"

function LoginButton(props){
    return <button onClick={props.onClick}>로그인</button>

}

function LogoutButton(props){
    return <button onClick={props.onClick}>로그인</button>
}

function LoginControl(props){

    const[IsLoggedIn,setIsLoggedIn] =useState(false);

    let btn;

    if(setIsLoggedIn){
        btn = <LogoutButton onClick={()=>{setIsLoggedIn(false)}}/>
    }else{
        btn =<LoginButton onClick={()=>{setIsLoggedIn(true)}}/>
    }


}


function App(){
    return <LoginControl/>
}

export default App;