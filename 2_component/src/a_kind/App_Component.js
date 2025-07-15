

// [예시]  <h2> ooo님, 반갑습니다 <h2>



function App(){
    return (
        <div className="App">
            함수형 컴포넌트 : <FuncHello name='홍길동'/>
            <hr/>
            클래스형 컴포넌트 : <ClassHello name='박길동'></ClassHello>
        </div>
    )
}

export default App;