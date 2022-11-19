const fs = require("fs");

fs.writeFile("./sesac.txt", "반갑습니다", "utf-8")
    .then(()=>{
        return fs.copyFile("./sesac.txt","./sesac2.txt");
    })
    .then(()=>{
        return fs.rename("./sesac2.txt","./new.txt");
    })

fs.readFile("./sesac.txt", "utf-8")
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
       console.log(err.message);
    })