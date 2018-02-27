const net = require("net");
var server,socket;

/* # properties socket
socket.setEncoding("utf8");
socket.setKeepAlive(true, 5000);
socket.setNoDelay(true);
socket.setTimeout(3000);
*/

// client #1

socket = net.connect("example.domain",function(){
	socket.write("data");
});
socket.on("error",function(err){

});
socket.on("close",function(){

});

// server #1

server = net.createServer(function(socket){
	socket.on("data",function(data){
		
	});
	socket.on("error",function(err){

	});
	socket.on("end",function(){

	});
	socket.on("close",function(){

	});
});
server.on("error",function(err){

});
server.on("close",function(){

});

server.listen(80);
