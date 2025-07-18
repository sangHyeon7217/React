
// server_start.js
// npm install express mysql cors

const express = require('express')
const app = express()

const mysql =require('mysql')
const dbconfig = require('./config/database.js')
const conn = mysql.createConnection(dbconfig)

const cors = require('cors')

// 웹서버 구동하기
const PORT = 8000;
app.listen( PORT, ()=>{
    console.log('EXPRESS 서버 시작:' + PORT)
});

// 디비 연결
conn.connect((err)=>{
    if(err) console.log('연결실패:', err)
    else console.log('연결성공');
})

app.use(cors())

// [1] 전체 검색
app.get('/api/get',(req, res)=>{
     const sql = "SELECT bnum, btitle, bname, mid "
                + " FROM node_board ";

     conn.query(sql, function(err, result, fields){
        if(err) throw err;
        console.log(result)
        res.send(result)
     } )
});

// [2] 입력
app.use(express.json())

app.post('/api/insert', (req, res)=>{
    console.log(req.body);
    const btitle = req.body.btitle;
    const bname = req.body.bname;
    const bcontent  = req.body.bcontent;
    const mid = req.body.mid;
    const bpw = req.body.bpw;

    const param = [btitle,bname,bcontent,mid,bpw];

    const sql ="INSERT INTO node_board(btitle,bname,bcontent,mid,bpw,insertdate,updatedate)"
    + " VALUES(?,?,?,?,?, now(),sysdate())";


    //sql에 param을 보내고 함수를 호출
    conn.query(sql,param, function(err,result,fields){
        if(err) throw err;
        console.log('압력성공',result)
        res.send('success')
    });
});

//[3]상세보기
app.get('/api/edit/:bnum',(req,res)=>{
    const bnum =req.params.bnum;
    console.log('bnum>>>',bnum)

    const sql ="select  bnum,btitle,bname,bcontent,mid,bpw,  "
    +" date_format(insertdate, '%Y-%m-%d') insertdate, "
    +" date_format(updatedate, '%Y-%m-%d') updatedate "
    +" FROM node_board "
    +" where bnum =?";
      conn.query(sql,[bnum], function(err,result,fields){
        if(err) throw err;
        console.log('상세보기성공',result)
        res.send(result)
    });
})



//[4]삭제
app.delete('/api/delete/:bnum',(req,res)=>{
    const bnum =req.params.bnum;
    console.log('bnum>>>',bnum);

    const sql="DELETE FROM node_board where bnum=?";

    conn.query(sql,[bnum], function(err,result){
        if(err) throw err;
        console.log('상세보기성공',result)
        res.send(result)
    });

});
//  const sql ="select  bnum,btitle,bname,bcontent,mid,bpw,  "
//     +" date_format(insertdate, '%Y-%m-%d') insertdate, "
//     +" date_format(updatedate, '%Y-%m-%d') updatedate "



//[5]수정
app.post('/api/update/:bnum',(req,res)=>{
    const bnum =req.params.bnum;
    const { btitle, bname, bcontent, mid, bpw } = req.body;
    const sql = `
        UPDATE node_board
        SET btitle = ?, 
            bname = ?, 
            bcontent = ?, 
            mid = ?, 
            bpw = ?, 
            updatedate = sysdate()
        WHERE bnum = ?
    `;

    const param = [btitle,bname,bcontent,mid,bpw,bnum];

     conn.query(sql, param, function(err, result, fields) {
        if(err) throw err;
        console.log('상세보기성공',result)
        res.send(result)
    });


})