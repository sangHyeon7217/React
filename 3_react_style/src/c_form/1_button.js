
function App(){

    const inputClick =()=>{
        alert('input button click')
    }


    const buttonPressed =(event) =>{
        event.preventDefault(); //submit 역활을 막아주기 =>페이지 새로고침을 막는다
        alert('button press')
    }

    const handleSubmit=(event)=>{
        event.preventDefault() // 
        alert('submit button')

    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='button' value='버튼1' onClick={inputClick} /><br />


                <button onClick ={buttonPressed}>버튼 2</button><br/>

                <input type='submit'  value= '버튼3'/>

            </form>
        </>
    )
}

export default App;