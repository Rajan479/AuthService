const UserService = require('../services/user-service.js');

const create = async function(request, response){
    try {
        const user = await UserService.create({
            email : request.body.email,
            password : request.body.password
        });
        return response.status(201).json({
            success : true,
            message : "Successfully created a city",
            data : user,
            err : {}
        });
    } catch (error) {
        console.log(error);
        return response.status(500),json({
            message : "Not able to create a user",
            data : {},
            success : false,
            err : error
        });
    }
};

const signIn = async function(request, response){
    try {
        const result = await UserService.signin(request.body.email, request.body.password);
        return response.status(200).json({
            success : true,
            data : result,
            err : {},
            message : 'Successfully signed in'
        });
    } catch (error) {
        console.log(error);
        return response.status(500),json({
            message : "Not able to create a user",
            data : {},
            success : false,
            err : error
        });
    }
}

const destroy = async function(request, response){
    try {
        const user = await UserService.destroy({
            id : request.body.userId
        });
        return response.status(200).json({
            success : true,
            message : "Successfully deleted a city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return response.status(500),json({
            message : "Not able to delete a user",
            success : false,
            err : error
        });
    }
}

const get = async function(request, response){
    try {
        const user = await UserService.get({
            id : request.id
        });
        return response.status(200).json({
            data : user,
            success : true,
            message : "Successfully fetched a user",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return response.status(500),json({
            data : {},
            message : "Not able to fetch a user",
            success : false,
            err : error
        });
    }
}

const isAuthenticated = async function(request, response){
    try {
        const token = request.headers['x-access-token'];
        const result = await UserService.isAuthenticated(token);
        return response.status(200).json({
            success : true,
            err : {},
            data : result,
            message : 'user is authenticated and token is valid'
        });

    } catch (error) {
        console.log(error);
        return response.status(500).json({
            data : {},
            message : "Not able to fetch a user",
            success : false,
            err : error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    signIn,
    isAuthenticated
}