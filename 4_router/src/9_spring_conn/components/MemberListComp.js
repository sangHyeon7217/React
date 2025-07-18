import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MemberListComp() {


   const [boards, setBoards] =useState([]);
 
    useEffect(()=>{
        axios.get('/api/member/select') //back-end 서버 연결(8080 톰캣서버)
        .then(result=> {
            //console.log(result)})
           const boards =result.data;
           setBoards([...boards]);
        }); 
    },[])


    return (
        <div>
            <h2 className="text-center">Boards List</h2>
            <div className ="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>아이디</th>
                            <th>이름 </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                       {
                        boards.map( board => 
                            <tr key={board.id}>
                                <td>{board.id}</td>
                                

                               

                                <td>{board.name}</td>
                                
                            </tr>
                        )
                       }
                    </tbody>
                </table>
            </div>         

           
        </div>
    );

}

export default MemberListComp;
