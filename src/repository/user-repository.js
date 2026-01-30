const { User, Role } = require('../models/index.js');

const createUser = async function(data){
    try {
        const user = await User.create(data);
        return user;
    } catch (error) {
        console.log("Something went wrong on repository layer");
        throw error;
    }
}

const deleteUser = async function(userId){
    try {
        await User.destroy({
            where: {
                id : userId
            }
        });
        return true;
    } catch (error) {
        console.log("Something went wrong on repository layer");
        throw error;
    }
}

const getUserById = async function(userId){
    try {
        const user = await User.findByPk(userId, {
            attributes : ['id', 'email']
        });
        return user;
    } catch (error) {
        console.log("Something went wrong on repository layer");
        throw error;
    }
}

const getUserByEmail = async function(email){
    try {
        const user = await User.findOne({
            where : {
                email : email
            }
        });
        return user;
    } catch (error) {
        console.log("Something went wrong on repository layer");
        throw error;
    }
}

const isAdmin = async function(userId){
    try {
        const user = await User.findByPk(userId);
        const adminRole = await Role.findOne({
            where : {
                name : 'ADMIN'
            }
        });
        return user.hasRole(adminRole);
    } catch (error) {
        console.log("Something went wrong on repository layer");
        throw error;
    }
}

module.exports = {
    createUser,
    deleteUser,
    getUserById,
    getUserByEmail,
    isAdmin
}