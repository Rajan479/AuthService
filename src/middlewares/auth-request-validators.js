const validateUserAuth = function(request, response, next){
    if( !request.body.email ||
        !request.body.password
    ){
        return response.status(400).json({
            success : false,
            data : {},
            message : 'Something went wrong',
            err : 'Email or password missing in the request'
        });
    }

    next();
}

module.exports = {
    validateUserAuth
}