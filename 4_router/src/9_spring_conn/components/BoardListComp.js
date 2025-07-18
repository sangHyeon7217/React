import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BoardListComp () {


   const [boards, setBoards] =useState([]);
 
    useEffect(()=>{
        axios.get('/api/board') //back-end 서버 연결(8080 톰캣서버)
        .then(result=> {
            //console.log(result)})
           const boards =result.data;
           setBoards([...boards]);
        }); 
    },[])


    const navigate =useNavigate();

    const createBoard =()=>{
        navigate('/api/insert-board') //App.js의 Route path의 api/insert-board를 부름    
    }

    const readBoard =(evt,seq)=>{
        evt.preventDefault();
        navigate(`/api/view-board/${seq}`) //역따움표 문자열 포맷팅
        //navigate('/api/view-board/'+seq)
    }

    return (
        <div>
            <h2 className="text-center">Boards List</h2>
            <div className ="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>타이틀 </th>
                            <th>작성자 </th>
                            <th>작성일 </th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        boards.map( board => 
                            <tr key={board.seq}>
                                <td>{board.seq}</td>
                                

                                <td>
                                    <a onClick={(evt)=>{readBoard(evt, board.seq)}}>{board.title}</a>
                                </td>

                                <td>{board.writer}</td>
                                <td>{board.regdate}</td>
                                <td>{board.cnt}</td>
                            </tr>
                        )
                       }
                    </tbody>
                </table>
            </div>         

            <div className="row">
                <button className="btn btn-primary" onClick={createBoard}> 글작성</button>

            </div>
        </div>
    );

}

export default BoardListComp;
