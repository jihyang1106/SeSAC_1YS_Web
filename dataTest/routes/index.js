const express = require("express");
const controller = require("../controller/index");
const router = express.Router();

router.get("/", controller.getIndex);

const axios = require("axios");
const cheerio = require("cheerio");
const { json } = require("body-parser");

router.get("/test", async (req,res) => {
    await axios({
        method : 'get',
        url : "https://www.10000recipe.com/ranking/home_new.html?rtype=r&dtype=d",
    }).then((res)=>{
        const $ = cheerio.load(res.data);
        const list = $("ul.common_sp_list_ul > li.common_sp_list_li");

        // title과 url 넣기
        let jsonList = {};
        list.each((i,list)=> {
            const title = $(list).find("div.common_sp_caption_tit").text();
            const url = "http://10000recipe.com"+$(list).find("a.common_sp_link").attr('href');

            jsonList[i] = {title,url};
            

            // console.log(i+1, {
            //     title,
            //     url
            // })
        });
        for(var i=0; i<Object.values(jsonList).length; i++){
            console.log(jsonList[i].url);
        };
        
    
        
        
    }).catch(err => {
        console.log(err);
    });
})


module.exports = router;