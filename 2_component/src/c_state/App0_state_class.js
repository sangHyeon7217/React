import { Component } from "react";


class ClassComp extends Component{

    constructor(props){
        super(props);
        //정적변수 -> 값 변경 안됨
        //this.data =100;

        //값이 변경 변수
            this.state={
                number :0
            }

    }

    render(){
        return(
            <div>
                <h3> 클래스 컴포넌트</h3>
                <p>숫자: {this.state.number} </p>
                <hr/>
                <input type ='button' value='확인1' onClick={
                    function(){
                        this.setState({number : Math.ceil(Math.random()*100)})
                    }.bind(this)
                }></input>
                <input type ='button' value='확인2'onClick={
                    ()=>{this.setState({number:200})}
                }></input>


            </div>
        )
    }

}


export default ClassComp;