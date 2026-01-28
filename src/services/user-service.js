const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserRepository  = require('../repository/user-repository.js');
const { JWT_SECRET } = require('../config/serverConfig.js');

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

const signin = async function(email, plainPassword){
    try {
        const user = await UserRepository.getUserByEmail(email);
    } catch (error) {
        console.log("Something went wrong in the signin process");
        throw error;
    }
}

const createToken = function(user){
    try {
       const token = jwt.sign(user, JWT_SECRET, { expiresIn : '1d' });
       return token
    } catch (error) {
        console.log("Something went wrong in token creation");
        throw error;
    }
}

const verifyToken = function(token){
    try {
        const result = jwt.verify(token, JWT_SECRET);
        return result;
    } catch (error) {
        console.log("Something went wrong in token validation", error);
        throw error;
    }
}

const checkPassword = function(userInputPlainPassword, encryptedPassword){
    try {
        return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
        console.log("Something went wrong on service layer");
        throw error;
    }
}

module.exports = {
    create,
    destroy,
    get,
    createToken,
    verifyToken,
    checkPassword
}