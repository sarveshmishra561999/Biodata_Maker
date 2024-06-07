const express = require("express")
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller")
const validate=require("../middlewares/validate-middleware")
const userSchema=require("../validators/auth-validator")
const authMiddleware = require("../middlewares/auth-middleware");


router.route("/").get(authcontrollers.home)

router.route("/register").post(validate(userSchema.signupSchema),authcontrollers.register)
router.route("/login").post(validate(userSchema.loginSchema),authcontrollers.login)
router.route("/user").get(authMiddleware,authcontrollers.user)


module.exports = router