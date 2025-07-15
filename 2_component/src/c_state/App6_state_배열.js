// App6_state_배열.js

import { useState } from "react";

function App(){

    let [title, setTitle] = useState(['맛집1','맛집2','맛집3'])
 


    return(
        <div>
            <div>{title}</div>
            <button onClick={()=>{
                setTitle(['변경1', '변경2', '변경3'])    
            }}> 변경 </button>
            <hr/>
            <ul>
                {
                    title.map((item, idx)=>{
                        return(<li key={idx} onClick={()=>{
                            let newItem = ['호남식당2','학식2','짬봉집2'];
                            //console.log(newItem);
                            title[idx] = newItem[idx];
                            console.log(title)
                            //setTitle(title);
                            setTitle([...title])
                        }}>{item}</li>)
                    })
                }
            </ul>
        </div>
    )
}

export default App;