var express = require('express');
const cors = require('cors');
var router = express();
router.use(cors());

let db=require("./db.js")
// console.log(db)
//中国散点图
router.get('/select', function (request, response) {
    let sql="SELECT info10,info3,info5,info6 FROM lbs_info_china_tb";
    let mydata = [];
    db.query(sql,(err,rows)=>{
        if(err){
            response.json({err:"chucuole"})
        }
        else{
            for(let em of rows)
            {
                //console.log(em);
                let record = [em['info10'],em['info3'], em['info5'], em['info6']];
                mydata.push(record);
            }
            // console.log(mydata);
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            response.write(JSON.stringify(mydata));
            response.end();
        };
    });
});
//中国各省扇形图
router.get('/ChinaBTselect', function (request, response) {
    let sql="select case right(left(info10,3),1) when  '省' then substring_index(info10,'省',1) when  '江' then substring_index(info10,'省',1) when  '市' then substring_index(info10,'市',1) else substring_index(info10,'自治区',1) end as 省,sum(info3) as 总数 from lbs_info_china_tb group by 1";
    let mydata = [];
    db.query(sql,(err,rows)=>{
        if(err){
            response.json({err:"chucuole"})
        }
        else{
            for(let em of rows)
            {
                //console.log(em);
                let record = [em['省'],em['总数']];
                mydata.push(record);
            }
            // console.log(mydata);
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            response.write(JSON.stringify(mydata));
            response.end();
        };
    });
});

//四川省散点图
router.get('/SCselect', function (request, response) {
    let sql="select info10 as 四川省,info3,info5,info6 from lbs_info_china_tb where info10 like \"四川省%\"";
    let mydata = [];
    db.query(sql,(err,rows)=>{
        if(err){
            response.json({err:"chucuole"})
        }
        else{
            for(let em of rows)
            {
                //console.log(em);
                let record = [em['四川省'],em['info3'],em['info5'],em["info6"]];
                mydata.push(record);
            }
            // console.log(mydata);
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            response.write(JSON.stringify(mydata));
            response.end();
        };
    });
});

//四川省柱形图
router.get('/SCZZTselect', function (request, response) {
    let sql="select SUBSTRING(SUBSTRING_INDEX(SUBSTRING_INDEX(info10,\"市\",1),\"省\",-1),1,2)as city,sum(info3) from lbs_info_china_tb where info10 like \"四川%\" GROUP BY 1 ";
    let mydata = [];
    db.query(sql,(err,rows)=>{
        if(err){
            response.json({err:"chucuole"})
        }
        else{
            for(let em of rows)
            {
                //console.log(em);
                let record = [em['city'],em['sum(info3)']];
                mydata.push(record);
            }
            // console.log(mydata);
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            response.write(JSON.stringify(mydata));
            response.end();
        };
    });
});

//江苏省散点图
router.get('/JSselect', function (request, response) {
    let sql="select info10 as 江苏省,info3,info5,info6 from lbs_info_china_tb where info10 like \"江苏省%\"";
    let mydata = [];
    db.query(sql,(err,rows)=>{
        if(err){
            response.json({err:"chucuole"})
        }
        else{
            for(let em of rows)
            {
                //console.log(em);
                let record = [em['江苏省'],em['info3'],em['info5'],em['info6']];
                mydata.push(record);
            }
            // console.log(mydata);
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            response.write(JSON.stringify(mydata));
            response.end();
        };
    });
});
router.listen(3000,function () {
    console.log("myserver")
})
module.exports = router;