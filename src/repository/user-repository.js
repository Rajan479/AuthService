const { where } = require('sequelize');
const { User } = require('../models/index.js');

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

module.exports = {
    createUser,
    deleteUser
}