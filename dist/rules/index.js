"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
var default_rules_1 = require("./default.rules");
var moonpay_rules_1 = require("./moonpay.rules");
var wyre_rules_1 = require("./wyre.rules");
exports.rules = {
    DEFAULT: default_rules_1.defaultRules,
    WYRE: wyre_rules_1.wyreRules,
    MOONPAY: moonpay_rules_1.moonpayRules,
};
//# sourceMappingURL=index.js.map