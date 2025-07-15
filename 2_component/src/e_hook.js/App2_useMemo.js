// App2_useMemo.js

import { use, useState } from "react";

/*

****hook
    =>함수형 컴포넌트에서 특정 기능 지원하기 위한 함수
    ->useXXXX()

    useState(): 값을 변경하는 변수
    useEffect(): 생명주기를 대신 하는 함수

    

    useMemo

        - 성능 개선을 위해서 리턴 값을 캐슁(cash)
        - 일반적인 경우 많이 사용 하진 않고, 잘못하면 오리혀 성능 저하 될 수 있음

    리턴변수 = useMemo( func, [변수])

*/





const Average = ()=>{
    const [list, setList]   = useState([])
    const [num, setNum]     = useState('')

    const onChange = (evt)=>{ setNum(evt.target.value)}

    const onInsert = () => {
        list.push(parseInt(num))
        console.log(list)
        //setList(list);
        setList([...list]);
        setNum('')
    }
    //---------------------------
    //const result =useMemo(()=>{return getCalc(list,[list])])
    //const result =useMemo(()=>getCalc(list,[list]))

    return(
        <div>
            <input type='text' value={num} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <hr/>
            <div>
               <ul>
                    {
                        list.map((item, idx)=>{
                            return <li key={idx}>{item}</li>
                })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Average;