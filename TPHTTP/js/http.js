const http = require('http');
const { handleGetRequest, handlePostRequest, handleDeleteRequest } = require('./middleware');
const { requestSupportedMethod } = require('./router');
const server = http.createServer(function(request, response){
    console.log(request)
    let method = request.headers['access-control-request-method'];
    if(requestSupportedMethod(response,request.method)){
        request.method = request.method && request.method == "OPTIONS" ? method : request.method
        console.log('request.method: ', request.method)
        if(request.method == "GET"){
            handleGetRequest(request, response);
        }else if(request.method == "POST"){
            handlePostRequest(request, response)
        }else if(request.method == "DELETE"){
            handleDeleteRequest(request, response)
        }else if(request.method == "UPDATE"){

        }
    }
})

server.listen(3000, function(){
    console.log('server started...')
});