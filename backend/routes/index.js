const express = require("express");

const router = express.Router();
const userSignUpController = require("../controller/user/userSignUp");
const signinController = require("../controller/user/userSignIn");
const userDetailsController = require("../controller/user/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/user/userLogout");
const allUsers = require("../controller/user/allUsers");
const updateUser = require("../controller/user/updateUser");
const UploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");

router.post("/signup", userSignUpController);
router.post("/signin", signinController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

//Admin Panel
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

//Product
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);

module.exports = router;
