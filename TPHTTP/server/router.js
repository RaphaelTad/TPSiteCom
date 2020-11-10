const requestSupportedMethodV = ['GET','POST'];

const routerPath = {
    get: ['/products'],
    post: ['/products']
}

function Router(){}

function requestSupportedMethod(res, method){
    if(requestSupportedMethodV.indexOf(method) !== -1){
        return true;
    }
    handleErrorRequest(res, 501, `${method} isn't yet supported by the server`);
}

function isExistPath(res, req){
    const methodRequested = req.method.toLowerCase();
    if(routerPath[methodRequested].indexOf(req.url) !== -1){
        return true;
    }
    handleErrorRequest(res, 404, `${req.url} doesn't exist in your GET router`);
}

Router.prototype.isExistPath = isExistPath;
Router.prototype.requestSupportedMethod = requestSupportedMethod;

module.exports = new Router()