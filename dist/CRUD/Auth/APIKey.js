"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKey = void 0;
function APIKey(req, res, next) {
    const api_key = req.header("x-api-key");
    if (api_key !== process.env.API_KEY) {
        res.status(401).json({
            Error: "API Key is invalid",
        });
    }
    else {
        return next();
    }
}
exports.APIKey = APIKey;
