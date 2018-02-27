const
	iconv=require("iconv-lite")
,	stream=iconv.decodeStream("utf8");

// #1 if receive part of pecket

stream.on("data",function(text){
	console.log(text);
});
stream.on("error",function(err){
	console.log(err);
});
stream.on("end",function(){

});

var b=iconv.encode("ㄱㅎ","utf8"); // total 6bytes
stream.write(b.slice(0,2)); // 2bytes received
stream.write(b.slice(2,3)); // 1bytes last part of ㄱ
stream.write(b.slice(3)); // 3bytes total part of ㅎ
// output well ㄱ and ㅎ