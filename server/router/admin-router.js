const express = require("express");
const adminControllers = require("../controllers/admin-controller");
const router = express.Router();

const authMiddleware=require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");


router.route('/users').get(authMiddleware,adminMiddleware,adminControllers.getAllUsers)
router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,adminControllers.deleteUserById)
router.route('/users/:id').get(authMiddleware,adminMiddleware,adminControllers.getUserById)
router.route('/users/update/:id').patch(authMiddleware,adminMiddleware,adminControllers.updateUserById)

router.route("/contact").get(authMiddleware,adminMiddleware,adminControllers.getAllContacts)
router.route("/contact/delete/:id").delete(authMiddleware,adminMiddleware,adminControllers.deleteContactById)
router.route("/contact/:id").get(authMiddleware,adminMiddleware,adminControllers.getContactById)
module.exports = router;