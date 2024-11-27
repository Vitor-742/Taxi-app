"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorResp = (errorCode, errorDescription) => ({ error_code: errorCode, error_description: errorDescription });
exports.default = errorResp;
