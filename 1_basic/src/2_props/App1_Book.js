import "../App.css";

function Book(props){
    return(
    <div>

            <h2> 책제목 :{props.title}</h2>
            <h4> 저자 :{props.writer}</h4>
            <h5> 가격: {props.price}</h5>
    </div>

    );
}

function App(){
    return(
        <div className="App">
            <Book title='자바'writer='김사또' price='30000'/>
            <Book title='=파이썬' writer='김한국' price='14000'/>
            <Book title='리엑트'writer='감나라' p   -+
            r/ce='34000'/>

            



        </div>
    )
}


export default App;
