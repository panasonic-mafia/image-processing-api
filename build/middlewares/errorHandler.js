"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  A custom error handler middleware
 * @param err - error
 * @param req - express request
 * @param res - express response
 * @param next - express next
 */
var errorHandler = function (err, req, res, next) {
    try {
        var status_1 = err.status || 500;
        var msg = err.message || "";
        console.log(err.stack);
        res.status(status_1).send("An error occured: ".concat(status_1, ": ").concat(msg));
    }
    catch (error) {
        next(error);
    }
};
exports.default = errorHandler;
