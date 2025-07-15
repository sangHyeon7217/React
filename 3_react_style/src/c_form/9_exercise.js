
//원화를 입력하면 달러가 나오고 달러를 입력하면 원화가 나옴

import { useState } from "react"

const App =() =>{

    const[won,setWon]=useState('');
    const[dollar,setDollar]=useState('');

    const exchangeRate =1300;

    const handleWonChange =(event)=>{
        const wonValue =event.target.value;
        setWon(wonValue);

    const num = parseFloat(wonValue);
    
    if(!isNaN(num)){
        setDollar((num/exchangeRate).toFixed(3));
    }else{
        setDollar(''); //입력한 값이 숫자일때만 달러 값을 계산하고 숫자가 아니면 달러값을 비운다
    }


}


    const handleDollarChange =(event)=>{
        const dollarValue = event.target.value;
        setDollar(dollarValue);

    const num = parseFloat(dollarValue);  

    if(!isNaN(num)){
        setWon((num*exchangeRate).toFixed(0))
        
    }else{
        setWon('');
    }
        


    }


    return(

        <div>

                <h2>처음화면</h2>
                <hr/>
        <label>원화 금액을 입력하세요</label>
            <input type='text' value={won} onChange={handleWonChange}/>


            <hr/>
        <label>달러 금액을 입력하세요</label>
        <input type='text' value={dollar} onChange={handleDollarChange}/>



        </div>
                

    )



}

export default App;