// App2_event.js

import '../App.css'

function App(){

    function btnClick() {  alert('확인1');   }

    return(
        <div className='App'>

            {/* <button onClick={ alert('확인0') }> 이벤트확인0 ( 이벤트처리 아님 ) </button> */}

            <button onClick={ btnClick }> 이벤트확인1 </button>
            <hr/>

            <button onClick={ function () {  alert('확인2');   } }> 이벤트확인2 </button>
            <hr/>

            <button onClick={ ()=> { alert('확인3'); } }> 이벤트확인3 </button>
        </div>
    )
}

export default App;