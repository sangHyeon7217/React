import { useState } from "react";


const InputTodo = (props) => {
    // [0] 화면 구성 확인
    const [todo, setTodo] = useState('');
    return(
        <div>
            <div>
                <div>
                    <input type='text' id='msg' name='msg' 
                        value={todo} placeholder="여기에 입력" />
                    <span> [ 추가 ] </span>    
                </div>
            </div>
        </div>
    );

 
}

export default InputTodo;