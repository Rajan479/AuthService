const UserRepository  = require('../repository/user-repository.js');

const create = async function(data){
    try {
        const user = await UserRepository.createUser(data);
        return user;
    } catch (error) {
        console.log("Something went wrong on service layer");
        throw error;
    }
}

const destroy = async function(id){
    try {
        await UserRepository.deleteUser(id);
        return true;
    } catch (error) {
        console.log("Something went wrong on service layer");
        throw error;
    }
}

const get = async function(id){
    try {
        const user = await UserRepository.getUserById(id);
        return user;
    } catch (error) {
        console.log("Something went wrong on service layer");
        throw error;
    }
}

module.exports = {
    create,
    destroy,
    get
}