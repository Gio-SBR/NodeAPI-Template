"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdHeader = void 0;
function UserIdHeader(req, res, next) {
    const userId = req.header("x-user-id");
    if (!userId) {
        res.status(401).json({
            Error: "User ID is invalid",
        });
    }
    else {
        const ReqBodyType = Array.isArray(req.body) ? "array" : typeof req.body;
        console.log("ReqBodyType:", ReqBodyType);
        switch (ReqBodyType) {
            case "object":
                Object.assign(req.body, { UserId: userId });
                break;
            case "array":
                req.body.map((x) => {
                    Object.assign(x, { UserId: userId });
                });
                break;
            default:
                req.body = { UserId: userId };
                break;
        }
        return next();
    }
}
exports.UserIdHeader = UserIdHeader;
