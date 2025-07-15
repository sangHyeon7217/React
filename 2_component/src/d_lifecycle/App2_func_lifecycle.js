import { useEffect,useState } from "react";

function FuncComp(){

    var [] = useState(0)
        
        var[number,setNumber] =useState(0);


    //클래스컴포넌트 componentWillMount() /componentDidUpdate/componentWillUnmount 
    //함수형 컴포넌트 ==>userEffect()
    useEffect(function(){
        console.log('useEffect()호출')
    })
    return(
        <div>
            <h3>함수형 컴포넌트</h3>
            <p> Number : { number } </p>
            <input type='button' value='눌려' onClick={ function(){
            setNumber( Math.round(Math.random()*100))
        }}></input>

        </div>

    )
}

export default FuncComp;