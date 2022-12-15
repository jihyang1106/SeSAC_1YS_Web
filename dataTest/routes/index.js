const express = require("express");
const controller = require("../controller/index");
const router = express.Router();

router.get("/", controller.getIndex);

const axios = require("axios");
const cheerio = require("cheerio");
const { json } = require("body-parser");

// DB에 넣을 데이터 객체 (recipe_title, recipe_url, recipe_img, recipe_ingd, recipe_time )
router.get("/test", async (req,res) => {
    
    await axios({
        method : 'get',
        url : "https://www.10000recipe.com/ranking/home_new.html?rtype=r&dtype=d",
    }).then((res)=>{
        const $ = cheerio.load(res.data);
        const list = $("ul.common_sp_list_ul > li.common_sp_list_li");

        let dbList = [];
    
        // 만약 데이터 한 개로 테스트 하려면 each 없이 바로 axios로 요청 가능
        list.each(async (i,list) => {
            const title = $(list).find("div.common_sp_caption_tit").text();
            const url = "http://10000recipe.com"+$(list).find("a.common_sp_link").attr('href');
  
            await axios({
                method : 'get',
                url : url,
            }).then((res)=>{ 
                const $ = cheerio.load(res.data);  // $("특정태그")
                const time = $("body").find("span.view2_summary_info2").text();
                const ingre = $("div.ready_ingre3 ul:first-child > li > a:first-child").text().replace(/ /gi, ""); // 공백제거
                const ingd = ingre.slice(0, -1); // 마지막 공백 제거
                const img = $("img#main_thumbs").attr('src');
                
                dbList.push({
                    title : title,
                    url : url, 
                    time : time,
                    ingd : ingd,
                    img : img,
                })
                return;
            });
            console.log(dbList);
        });

        
    }).catch(err => {
        console.log(err);
        // for(var i=0; i<Object.values(jsonList).length; i++){
        //     console.log(jsonList[i].url);
        // }
    });
})

router.get("/test2", async (req,res) => {
    for(var i=0; i<Object.values(jsonList).length; i++){
        console.log(jsonList[i].title);
    }
    
})


module.exports = router;