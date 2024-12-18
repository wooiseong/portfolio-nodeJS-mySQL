// 1. 引入需要模塊
const express = require('express')
const app = express() 

app.use(express.json())

const cors = require('cors')
app.use(cors())

//2. 配置mysql
const mysql = require('mysql2')
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'portfolio'
})


// 3.處理信息
app.post('/feedback', (req,res) => {
  const body = req.body
  const sqlStr = 'select * from feedback_form where name = ?'
  db.query(sqlStr,body.name, (err,results) => {
      if (err){
        return res.send({status: 100, message: '用戶是否重複提交查詢失敗'})
      } 
      if (results.length > 0){
      return res.send({status:  300 , message: '相同用戶重複提交數據', results})
      }
      const sql = 'insert into feedback_form set ?'
      db.query(sql,body , (err,results) => {
          if (err) return res.send({status:1, message: '用戶表單加入數據庫失敗'})
          if (results.affectedRows === 1){
            res.send({status:  200 , message: '用戶表單加入數據庫成功', results})
          }
      })    
  })
})

// 4.架設server
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})


