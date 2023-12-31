const express = require("express");
const {Type} = require("../models")
const { getAllType, createType, updateType } = require("../controllers/type.controllers.js");
const {authenticate} = require("../middlewares/auth/authenticate.js")
const {authorize} = require("../middlewares/auth/authorize.js");
const { checkCreateType } = require("../middlewares/validates/checkCreate");
const typeRouter = express.Router();

typeRouter.get("/", getAllType);
typeRouter.post("/create", authenticate, authorize(["Admin"]), checkCreateType(Type), createType);
typeRouter.put("/update/:id_type", authenticate, authorize(["Admin"]), updateType);

module.exports = {
    typeRouter,
}