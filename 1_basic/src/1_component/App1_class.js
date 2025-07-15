
/*
    컴포넌트
        -클래스형 :기존부터 사용
        -함수형   : 최근에 부각
*/


//const { Component } = require("react");
import { Component } from "react";
import "..//1_component"

//클래스형 컴포넌트
//      [1]Component 상속받기
//      [2]render()

class App extends Component{
    //렌더링: 브라우저에 화면 출력
    render(){
        //자바 스크립스트 주석1
        /*자바 스트립트 주석2*/
        return (
            
            //return 최상위 태그 1개만
            
          <div className="App">

            {/* 여기 영역은 JSX 문법 영역이다 */}

                {/* {여기 안에 주석} */}
                <div className="App-link">안녕하세요 </div>
                <div className="App-logo">짝꿍님 오늘도 즐거운 </div>

                <hr/>
                <img src='../logo192.png '/>

          </div>       
        );
  }
}
export default App;