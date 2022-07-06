import * as helpers from "../helpers";
export var wyreRules = {
    required: {
        message: "The :attribute field is required.",
        validate: function (val) { return !helpers.isBlank(val); },
    }
};
//# sourceMappingURL=wyre.rules.js.map