import { Component, useState } from "react";





function ClassComp(props){

const [number,setState]=useState=(0);

    return(
         <div>
                <h3> 클래스 컴포넌트</h3>
                <p>숫자: {number} </p>
                <hr/>
                <input type ='button' value='확인1' onClick={
                   ()=>{
                        setState(Math.ceil(Math.random()*100))}
                   
                }></input>
                <input type ='button' value='확인2'onClick={
                    ()=>{setState({number:200})}
                }></input>


            </div>
    );
 }



export default ClassComp;