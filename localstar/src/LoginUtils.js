// LoginUtils.js

var LoginUtils = {
    generateStrongPasswordHash: function (password, salt) {
        const crypto = require('crypto');
        crypto.DEFAULT_ENCODING = 'hex';
        const key = crypto.pbkdf2Sync(password, new Buffer(salt, 'binary'), 100000, 64, 'sha512');
        return '100000' + ':' + salt.toUpperCase() + ':' + key.toString('hex').toUpperCase();
    },

    checkSaltStatus: function (json) {
        if (json.response.code == 'GET_SALT_SUCCESS') {
            return true;
        } else {
            let error = new Error(json.response.message);
            error.response = json;
            throw error;
        }
    },

    checkLoginStatus: function (json) {
        if (json.response.code == 'AUTHENTICATION_SUCCESS') {
            return true;
        } else {
            let error = new Error(json.response.message);
            error.response = json;
            throw error;
        }
    }
};

export { LoginUtils as default };