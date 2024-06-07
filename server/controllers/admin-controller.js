const Contact = require("../models/contact-model")
const User = require("../models/user-model")
const getAllUsers = async (req, res,next) => {
    try {
        const users = await User.find({}, { password: 0 })
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" })
        }
        return res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}
const deleteUserById = async (req, res,next) => {
    try {
        const id=req.params.id;
        await User.findByIdAndDelete({_id:id})
        return res.status(200).json({message:"User Deleted Successfully"});
    } catch (error) {
        next(error)
    }
}

const getUserById = async (req, res,next) => {
    try {
        const id=req.params.id;
        const users = await User.findOne({_id:id}, { password: 0 })
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" })
        }
        return res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}
const updateUserById = async (req, res,next) => {
    try {
        const id=req.params.id;
        const updateUserData = req.body
        const updateUser=await User.updateOne({_id:id}, { $set:updateUserData})
        return res.status(200).json(updateUser)
    } catch (error) {
        next(error)
    }
}

const getAllContacts = async (req, res,next) => {
    try {
        const contact = await Contact.find()
        if (!contact || contact.length === 0) {
            return res.status(404).json({ message: "No Contact Found" })
        }
        return res.status(200).json(contact)
    } catch (error) {
        next(error)
    }
}
const deleteContactById = async (req, res,next) => {
    try {
        const id=req.params.id;
        await Contact.findByIdAndDelete({_id:id})
        return res.status(200).json({message:"Contact Deleted Successfully"});
    } catch (error) {
        next(error)
    }
}
const getContactById = async (req, res,next) => {
    try {
        const id=req.params.id;
        const contact = await Contact.findOne({_id:id}, { password: 0 })
        if (!contact || contact.length === 0) {
            return res.status(404).json({ message: "No Contact Found" })
        }
        return res.status(200).json(contact)
    } catch (error) {
        next(error)
    }
}




module.exports = {getAllUsers,getAllContacts,deleteUserById,getUserById,updateUserById,deleteContactById,getContactById};