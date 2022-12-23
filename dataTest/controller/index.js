const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");


exports.getIndex = async (req, res) => {
    
    await axios({
        method : 'get',
        url : "https://www.10000recipe.com/ranking/home_new.html",
    }).then((res)=>{
        const $ = cheerio.load(res.data);
        const list = $("ul.common_sp_list_ul > li.common_sp_list_li");

        const dbList = [];

        // 만약 데이터 한 개로 테스트 하려면 each 없이 바로 axios로 요청 가능
        list.each(async (i,list) => {
            const title = $(list).find("div.common_sp_caption_tit").text();
            const url = "http://10000recipe.com"+$(list).find("a.common_sp_link").attr('href');
  
            await axios({
                method : 'get',
                url : url,
            }).then((res)=>{ 
                const $ = cheerio.load(res.data);  // $("특정태그")
                const time = $("body").find("span.view2_summary_info2").text().replace(/[^0-9]/g,'');
                const ingre = $("div.ready_ingre3 ul:first-child > li > a:first-child").text().replace(/ /gi, ""); // 공백제거
                // const ingd = ingre.slice(0, -1); // 마지막 공백 제거
                const ingd = ingre.replace(/\n/g, ",");
                const img = $("img#main_thumbs").attr('src');
                
                dbList.push({
                    recipe_title : title,
                    recipe_url : url, 
                    recipe_ingd : `,${ingd}`,
                    recipe_time : time,
                    recipe_img : img,
                })
                // fs.writeFileSync('csv/result.csv', dbList);
            });
            // await axios 세부
            console.log(dbList);
            const jsonList = JSON.stringify(dbList); 
            fs.writeFile('recipe1.json', jsonList, function(err){
                if(err) throw err;
            })
        });
        // each
    }).catch(err => {
        console.log(err);
        // for(var i=0; i<Object.values(dbList).length; i++){
        //     console.log(dbList);
        // }
    });
    
}
