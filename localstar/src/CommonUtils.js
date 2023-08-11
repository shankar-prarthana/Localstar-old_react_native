// CommonUtils.js

var CommonUtils = {
    generateStrongPasswordHash: function (password) {
        const crypto = require('crypto');
        crypto.DEFAULT_ENCODING = 'hex';
        const salt = crypto.randomBytes(16);
        const key = crypto.pbkdf2Sync(password, new Buffer(salt, 'binary'), 100000, 64, 'sha512');
        return '100000' + ':' + salt.toString('hex').toUpperCase() + ':' + key.toString('hex').toUpperCase();
    },

    countContain: function (strPassword, strCheck) {
        var nCount = 0;
        var i = 0;

        for (i = 0; i < strPassword.length; i++) {
            if (strCheck.indexOf(strPassword.charAt(i)) > -1) {
                nCount++;
            }
        }

        return nCount;
    },

    getPasswordScore: function (strPassword) {
        var nScore = 0;
        var m_strUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var m_strLowerCase = "abcdefghijklmnopqrstuvwxyz";
        var m_strNumber = "0123456789";
        var m_strCharacters = "!@#$%^&*?_~";

        if (strPassword.length < 5) {
            nScore += 5;
        } else if (strPassword.length > 4 && strPassword.length < 8) {
            nScore += 10;
        } else if (strPassword.length > 7) {
            nScore += 25;
        }

        let nUpperCount = CommonUtils.countContain(strPassword, m_strUpperCase);
        var nLowerCount = CommonUtils.countContain(strPassword, m_strLowerCase);
        var nLowerUpperCount = nUpperCount + nLowerCount;

        if (nUpperCount == 0 && nLowerCount != 0) {
            nScore += 10;
        } else if (nUpperCount != 0 && nLowerCount != 0) {
            nScore += 20;
        }

        var nNumberCount = CommonUtils.countContain(strPassword, m_strNumber);
        if (nNumberCount == 1) {
            nScore += 10;
        }
        if (nNumberCount >= 3) {
            nScore += 20;
        }

        var nCharacterCount = CommonUtils.countContain(strPassword, m_strCharacters);
        if (nCharacterCount == 1) {
            nScore += 10;
        }
        if (nCharacterCount > 1) {
            nScore += 25;
        }

        if (nNumberCount != 0 && nLowerUpperCount != 0) {
            nScore += 2;
        }

        if (nNumberCount != 0 && nLowerUpperCount != 0 && nCharacterCount != 0) {
            nScore += 3;
        }

        if (nNumberCount != 0 && nUpperCount != 0 && nLowerCount != 0 && nCharacterCount != 0) {
            nScore += 5;
        }

        return nScore;
    },
};

export { CommonUtils as default };