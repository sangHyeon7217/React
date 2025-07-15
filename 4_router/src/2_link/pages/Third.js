import { Link } from "react-router-dom";

const Third =(props) =>{

    let list = props.datas.map((data,idx)=>{

        return(
            <div key={idx}>
                <h3>{data.title}</h3>
                <h5><Link to={`/fourth/${idx}/${data.title}`}>    {data.title}</Link></h5>
                <img src={`imgs/${data.img}`}/>
            </div>
        )
    })

    
    

    return(
        <div>
            여기는 Third 페이지 입니다
            <hr/>
            {list}
        </div>
    )
}

export default Third;