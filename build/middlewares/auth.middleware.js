"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const notAuthorized_error_1 = require("../errors/notAuthorized.error");
// import { currentUserMiddleware } from "./currentUser.middleware";
const authMiddleware = (req, res, next) => {
    var _a;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.jwt)) {
        throw new notAuthorized_error_1.NotAuthorizedError();
    }
    next();
};
exports.authMiddleware = authMiddleware;
