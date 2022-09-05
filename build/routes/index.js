"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var images_1 = __importDefault(require("./api/images"));
var routes = (0, express_1.Router)();
var queryValidators = [
    (0, express_validator_1.query)('width', 'Width is missing or wrong, please provide correct number').exists({ checkFalsy: true }).isInt({ allow_leading_zeroes: false }),
    (0, express_validator_1.query)('height', 'Height is missing or wrong, please provide correct number').exists({ checkFalsy: true }).isInt({ allow_leading_zeroes: false }),
    (0, express_validator_1.query)('filename', 'Filename is empty').exists({ checkFalsy: true })
];
routes.get("/", function (req, res) {
    res.send("Main api route");
});
routes.use("/images", queryValidators, images_1.default);
exports.default = routes;
