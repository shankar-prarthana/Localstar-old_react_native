// ForgotPasswordUtils.js

var ForgotPasswordUtils = {
    checkSendValidationOtpStatus: function (json) {
        if (json.response.code == 'OTP_SENT_SUCCESSFULLY') {
            return true;
        } else {
            let error = new Error(json.response.message);
            error.response = json;
            throw error;
        }
    },

    checkSendPasswordResetEmailStatus: function (json) {
        if (json.response.code == 'PASSWORD_RESET_RESPONSE') {
            return true;
        } else {
            let error = new Error(json.response.message);
            error.response = json;
            throw error;
        }
    },

    checkChangePasswordStatus: function (json) {
        if (json.response.code == 'PASSWORD_CHANGED') {
            return true;
        } else {
            let error = new Error(json.response.message);
            error.response = json;
            throw error;
        }
    },

    checkValidateOtpStatus: function (json) {
        if (json.response.code == 'PHONE_NUMBER_VERIFICATION_SUCCESSFUL') {
            return true;
        } else {
            let error = new Error(json.response.message);
            error.response = json;
            throw error;
        }
    }
};

export { ForgotPasswordUtils as default };