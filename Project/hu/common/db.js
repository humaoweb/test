var mongoose=require('mongoose');
var url='mongodb://localhost/drink'
mongoose.connect(url);
//连接数据库
module.exports=mongoose;
