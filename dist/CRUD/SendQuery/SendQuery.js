"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
const DatabaseConfig_1 = require("../../DatabaseConfig");
function SendQuery(Query, SuccessMessage, ErrorMessage, Params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const request = (yield mssql_1.default.connect(DatabaseConfig_1.DBConnectionString)).request();
            if (Params !== null) {
                Params === null || Params === void 0 ? void 0 : Params.map((p) => {
                    request.input(p.Name, p.Value);
                });
            }
            const results = yield request.query(Query());
            if (results.recordset) {
                return {
                    status: 200,
                    body: results.recordset,
                };
            }
            else if (results.rowsAffected[0] > 0) {
                return {
                    status: 200,
                    body: [
                        {
                            Message: SuccessMessage || "Success",
                        },
                    ],
                };
            }
            else {
                return {
                    status: 404,
                    body: [
                        {
                            Error: ErrorMessage || "Function didn't run",
                        },
                    ],
                };
            }
        }
        catch (error) {
            console.log("Error from send query: ", error);
            return {
                status: 501,
                body: [
                    {
                        Error: ErrorMessage || "Error - check SendQuery",
                    },
                ],
            };
        }
    });
}
exports.default = SendQuery;
