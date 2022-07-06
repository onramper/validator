import * as helpers from "../helpers";
export var moonpayRules = {
    required: {
        message: "The :attribute field is required.",
        validate: function (val) { return !helpers.isBlank(val); },
    },
    email: {
        message: "The :attribute must be a valid email address.- Moonpay",
        validate: function (val) { return helpers.testRegex(val, /^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i); },
    }
};
//# sourceMappingURL=moonpay.rules.js.map