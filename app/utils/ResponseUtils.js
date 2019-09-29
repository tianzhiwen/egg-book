'use strict';

exports.response_struct = (code, message, data) => {
    return {code, message, data, timestamp: Date.now()}
}