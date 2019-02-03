var express = require("express");
var fs = require("fs");
var multer = require("multer");

var app = express();

var createFolder = function(folderName){
  try{
    fs.accessSync(folderName);
  }
  catch(e){
    console.log(e);
    fs.mkdirSync(folderName);
  }
}

var uploadFolder = "./upload";
createFolder(uploadFolder);

var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, uploadFolder);
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
});

var upload = multer({storage: storage});

app.get("/formfileupload", function(req, res){
  /*** 读取文件 ***/
  //var file = fs.readFileSync("./fileupload.html", {encoding: 'utf8'});
  //res.send(file);
  /*** 用文件流读取 ***/
  var fileStream = fs.createReadStream(__dirname + "/fileupload.html", "utf8");
  fileStream.pipe(res);
});

app.post("/upload", upload.single('avatar'), function(req, res){
  console.dir(req.file);
  res.json({status: 1});
});

app.listen(3000);
console.log("server is running!");