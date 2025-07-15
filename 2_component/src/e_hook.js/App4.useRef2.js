// App2_useMemo.js

import { useCallback, useMemo, useState, useRef } from "react";

/*

**** hook
    -> 함수형 컴포넌트에서 특정 기능 지원하기 위한 함수
    -> useXXXX()

    ` useState()
    ` useEffect()

    ` useMemo

        - 성능 개선을 위해서 리턴 값을 캐슁(cash)
        - 일반적인 경우 많이 사용 하진 않고, 잘못하면 오리혀 성능 저하 될 수 있음

        리턴변수 = useMemo( func, [변수])
    
    ` useCallback()
        - 주로 렌더링 성능을 최적화해야 하는 상황에 사용 -> 잘못하면 오리혀 성능 저하 될 수 있음
        - useMemo() 유사

            useMemo()       -> 캐싱의 대상이 함수의 리턴값
            useCallback()   -> 캐싱의 대상이 컴포넌트 내부의 함수

    ` useRef()
        [1] useRef()로 리턴값은 객체는 컴포넌트의 모든 생명주기 동안 유지됨
                -> ref객체가 변경되더라도 렌더링되지 않는다
                   그러나 useState()의 변수의 렌더링이 일어나면 화면에 값이 변경됨

        [2] 브라우저 DOM 요소에 직접 접근 가능
*/

const getCalc = (nums) => {
    console.log(`계산중.....: ${nums}`)
    if(nums.length === 0) return 0;

    //[1,2,3,4,5] => (1,2) => (앞의결과값,3) => (앞의결과값,4) => (앞의결과값,5)
    const sum = nums.reduce((a,b)=> a+b )
    return sum;
}

const Average = ()=>{
    const [list, setList]   = useState([])
    const [num, setNum]     = useState('')

    const inputEL = useRef(null);


    //const onChange = (evt)=>{ setNum(evt.target.value)}
    const onChange = useCallback((evt)=>{ 
        setNum(evt.target.value)
    },[])

    const onInsert = useCallback( () => {
        list.push(parseInt(num))
        console.log(list)
        //setList(list);
        setList([...list]);
        setNum('')

        inputEL.current.focus();

    },[num])

    //---------------------------------
    // const result = useMemo(()=> { return getCalc(list)}, [list])
    const result = useMemo(()=> getCalc(list), [list])

    return(
        <div>
            <input type='text' value={num} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <hr/>
            <div>
               <ul>
                    {
                        list.map((item, idx)=> {
                           return  <li key={idx}>{item}</li>
                        })
                        // list.map((item, idx)=> <li key={idx}>{item}</li> )

                    }
                </ul>                
            </div>
            <hr/>
            <div>
                {/* 결과값 : { getCalc(list)} <br/>
                결과값 : { getCalc(list)} <br/>
                결과값 : { getCalc(list)} <br/>
                결과값 : { getCalc(list)} <br/> */}

                결과값2 : {result} <br/>
                결과값2 : {result} <br/>
                결과값2 : {result} <br/>
                결과값2 : {result} <br/>
            </div>
        </div>
    )
}

export default Average;