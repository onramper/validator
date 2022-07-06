var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { rules } from "./rules";
import * as helpers from "./helpers";
export var Gateway;
(function (Gateway) {
    Gateway["Default"] = "DEFAULT";
    Gateway["Moonpay"] = "MOONPAY";
    Gateway["Wyre"] = "WYRE";
})(Gateway || (Gateway = {}));
export var ValidationStatus;
(function (ValidationStatus) {
    ValidationStatus[ValidationStatus["VALID"] = 0] = "VALID";
    ValidationStatus[ValidationStatus["INVALID"] = 1] = "INVALID";
    ValidationStatus[ValidationStatus["NOT_AVAILABLE"] = 2] = "NOT_AVAILABLE";
})(ValidationStatus || (ValidationStatus = {}));
var OnramperValidator = (function () {
    function OnramperValidator(options) {
        var _this = this;
        this.showMessageFor = function (field) {
            if (!_this.visibleFields.includes(field)) {
                _this.visibleFields.push(field);
            }
        };
        this.hideMessageFor = function (field) {
            var index = _this.visibleFields.indexOf(field);
            if (index > -1) {
                _this.visibleFields.splice(index, 1);
            }
        };
        this.fields = {};
        this.errorMessages = {};
        this.rules = rules;
        this.visibleFields = [];
        this.className = options === null || options === void 0 ? void 0 : options.className;
        this.messagesShown = false;
        this.element = function (message) { return message; };
    }
    OnramperValidator.prototype.getErrorMessages = function () {
        return this.errorMessages;
    };
    OnramperValidator.prototype.purgeFields = function () {
        this.fields = {};
        this.errorMessages = {};
    };
    OnramperValidator.prototype.showMessages = function () {
        this.messagesShown = true;
    };
    OnramperValidator.prototype.hideMessages = function () {
        this.messagesShown = false;
    };
    OnramperValidator.prototype.allValid = function () {
        for (var key in this.fields) {
            if (this.fieldValid(key) === false) {
                return false;
            }
        }
        return true;
    };
    OnramperValidator.prototype.fieldValid = function (field) {
        return (this.visibleFields.includes(field) &&
            this.fields.hasOwnProperty(field) &&
            this.fields[field] === true);
    };
    OnramperValidator.prototype.message = function (field, inputValue, gateway) {
        var rules = gateway
            ? __assign(__assign({}, this.rules.DEFAULT), this.rules[gateway]) : this.rules.DEFAULT;
        this.fields[field] = true;
        var element;
        if (rules &&
            this.checkValidity(field, inputValue, rules) === ValidationStatus.INVALID) {
            element = this.element(helpers.modifyMessage(field, rules[field].message));
            this.fields[field] = false;
        }
        else {
            return;
        }
        if (this.messagesShown || this.visibleFields.includes(field))
            return element;
    };
    OnramperValidator.prototype.validateAll = function (data, gateway) {
        var rules = gateway
            ? __assign(__assign({}, this.rules.DEFAULT), this.rules[gateway]) : this.rules.DEFAULT;
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var validStatus = this.checkValidity(key, value, rules);
            var message = void 0;
            switch (validStatus) {
                case ValidationStatus.INVALID:
                    message = this.element(helpers.modifyMessage(key, rules === null || rules === void 0 ? void 0 : rules[key].message));
                    this.errorMessages[key] = message;
                    break;
            }
        }
    };
    OnramperValidator.prototype.checkValidity = function (field, inputValue, rules) {
        if (rules === null || rules === void 0 ? void 0 : rules.hasOwnProperty(field))
            if (rules[field].validate(inputValue))
                return ValidationStatus.VALID;
            else
                return ValidationStatus.INVALID;
        return ValidationStatus.NOT_AVAILABLE;
    };
    return OnramperValidator;
}());
export { OnramperValidator };
//# sourceMappingURL=OnramperValidator.js.map