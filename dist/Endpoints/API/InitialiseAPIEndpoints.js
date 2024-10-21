"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_Endpoints = void 0;
const express_1 = require("express");
const HealthCheck_1 = require("./HealthCheck/HealthCheck");
exports.API_Endpoints = (0, express_1.Router)();
exports.API_Endpoints.use("/HealthCheck", HealthCheck_1.HealthCheck);
