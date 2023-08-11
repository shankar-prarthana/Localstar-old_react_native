// SignUpUtils.js

var SignUpUtils = {
    checkSendVerificationOtpStatus: function (json) {
        if (json.response.code == 'OTP_SENT_SUCCESSFULLY') {
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
    },

    checkSignupStatus: function (json) {
        if (json.response.code == 'ACCOUNT_CREATED') {
            return true;
        } else {
            let error = new Error(json.response.message);
            error.response = json;
            throw error;
        }
    }
};

export { SignUpUtils as default };