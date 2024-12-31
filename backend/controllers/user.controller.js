import { errorHandler } from "../utils/error.js";
import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
    res.json({
        message: "Api is still working"
    });
};

// update User

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, "You are not authorized to update this user"));
    }
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                profilePicture: req.body.profilePicture,
            }
        }, { new: true });
        const { password, ...others } = updatedUser._doc;
        res.status(200).json(others);
    } catch (err) {
        next(err);
    }
};

// delete User

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, "You are not authorized to delete this user"));
    }
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User has been deleted" });
    } catch (err) {
        next(err);
    }
};