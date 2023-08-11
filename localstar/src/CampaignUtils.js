// CampaignUtils.js

var CampaignUtils = {
    addItemEvery: function (str, item, every) {
        for (let i = 0; i < str.length; i++) {
            if (!(i % (every + 1))) {
                str = str.substring(0, i) + item + str.substring(i);
            }
        }
        return str.substring(1);
    }
};

export { CampaignUtils as default };