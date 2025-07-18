import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BoardViewComp(){


    const {seq} =useParams();

    const [board,setBoard] =useState({});


    const Navigate =useNavigate();

    useEffect(()=>{
        axios.get(`/api/board/${seq}`)
        .then(result=>setBoard(result.data))
       
    },[])

    const goToList=()=>{

        Navigate('/');
    };

    const deleteBoard=(evt)=>{
        evt.preventDefault();
        axios.delete(`/api/board/${seq}`)
         
        Navigate('/')
    
    }




  
    return(
        <div>
            <div className='col-md-6 offset-md-3'>
                <h3 className='text-center'> 게시글 보고 </h3>
                <div className='card-body'>



                    <div className='row'>
                        <div className='alert alert-success'>{board.title}</div>
                    </div>

                    <div className='row'>
                        <div className='alert alert-success'>{board.writer}</div>
                    </div>

                    <div className='row'>
                        <div className='alert alert-success'>{board.content}</div>
                    </div>

                    <button className='btn btn-primary' style={{marginLeft:'10px'}}
                    onClick={goToList}>글목록으로 이동</button>
                    <button className='btn btn-primary' style={{marginLeft:'10px'}}
                    onClick={deleteBoard}>삭제하기</button>

                </div>
            </div>
        </div>
    )

}

export default BoardViewComp;