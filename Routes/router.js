const express = require("express");
const router = new express.Router();
const controllers = require("../controllers/userControllers");
const authenticate = require("../middleware/authenticate");


// Routes
router.post("/user/register",controllers.userregister);
router.post("/user/sendotp",controllers.userOtpSend);
router.post("/user/login",controllers.userLogin);
router.get("/logout",authenticate,controllers.userLogout);
router.get("/validuser",authenticate,controllers.userValid);


module.exports = router;