
/*
    렌더링 성능을 최적화 하기 위해

        - useMemo( func, [])
        - useCallback(func, [])
*/

// App4_useRef3.js
import { useState, useRef, useCallback } from 'react';
import '../App.css'
import produce from 'immer';

const App = () => {

    const nextId = useRef(1);

    const [formData, setFormData] = useState({ userid:''
                        , username:''
                        , email:''})

    const [data, setData] = useState({
        array: [],
        other: null
    })



    const onInputChange = useCallback((evt)=>{
        const { name, value } = evt.target;
        //console.log(`${name} : ${value}`)
        setFormData({...formData, [name]:value})
    },[formData])  

    const onSubmit = useCallback((evt) =>{
        //alert('ok')
        evt.preventDefault();

        const info = {
            id : nextId.current
            ,userid : formData.userid
            ,username : formData.username
            ,email : formData.email
        }

        // arary에 새 항목 추가
        setData({...data, array: data.array.concat(info)});

        // 폼 데이타 초기화
        setFormData({userid:'', username:'', email:''})
        
        nextId.current += 1;
    }, [formData,data])

    const onRemove = useCallback((id) => {
        alert(id);
        // 이 부분은 오늘 확인만 합시다
        setData( produce(data, draft => {
            draft.array.splice(draft.array.findIndex( info => info.id===id), 1);
        }) )
        //setData({...data, array:data.array.filter(info=> info.id!==id)})
    }, [data])

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <input name='userid'   placeholder="아이디"  onChange={onInputChange}  value={formData.userid} /><br/>
                <input name='username' placeholder="이름"    onChange={onInputChange}  value={formData.username} /><br/>
                <input name='email'    placeholder='이메일'  onChange={onInputChange}  value={formData.email} /><br/>
                <button type='submit'>등록</button>
            </form>

            <hr/>
            <ul>
                {
                    data.array.map((info)=>{
                        return (
                        <li key={info.id} onClick={()=> onRemove(info.id) }>
                            <span>{info.userid}:{info.username}:{info.email}</span>
                        </li>
                        )
                    })
                }
            </ul>   
        </div>
    )
}

export default App;