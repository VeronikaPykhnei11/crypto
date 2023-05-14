const router = require("express").Router();
const validateInfo = require("../middleware/validateInfo");
const authorization = require("../middleware/authorization");
const controller = require("../controllers/user.controller");
const passwordController = require("../controllers/password.controller");

//REGISTER ROUTE
router.post("/sign-up", validateInfo, controller.user_sign_up);

//LOGIN ROUTE
router.post("/sign-in", validateInfo, controller.user_sign_in);

//USER TOKEN ROUTE
router.get("/verify-token", authorization, controller.user_token_verify);

//PASSWORD ROUTE
router.post("/forgot-password", passwordController.forgot_password);
router.patch("/reset-password", passwordController.reset_password);

module.exports = router;