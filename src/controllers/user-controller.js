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

module.exports = {
    create,
    destroy
}