const User = require("../models/user-model")
const bcrypt = require("bcryptjs")
const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("welcome to new website home ")
    } catch (error) {
        console.log(error)
    }

}
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "email already exist" })
        }

        const userCreated = await User.create({ username, email, phone, password })
        res.status(201).json({ message: "registeration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString() })
    } catch (error) {
        res.status(500).send({ message: "registartation failed" })
    }

}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credential" })
        }

        const user = await userExist.comparePassword(password)
        if (user)
            res.status(200).json({ message: "login successful", token: await userExist.generateToken(), userId: userExist._id.toString() })
        else
            res.status(401).json({ message: "Invalid Email or Password" })
    } catch (error) {
        console.log("this =======>",error)
        res.status(400).send({ message: "login failed" })
    }

}
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData)
        return res.status(200).json({ userData })
    } catch (error) {
        console.log(` error from user route ${error}`);

    }
}

module.exports = { home, register, login, user }