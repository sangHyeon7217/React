
//함수형 컴포넌트롤 만들기 


import { useState } from "react";



function App(){

    const[count,setCount]=useState(0);

    return(
        <div>

            <h3>값:{count}</h3>
            <input type='button' value='+' onClick={()=>setCount(count+1)}/>
            <input type='button'value='-' onClick={()=>setCount(count-1)}/>


        </div>
    )


}
export default App;