"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
const attributeManager_1 = require("../common/attributeManager");
const attributes_1 = require("../common/attributes");
let MdButton = class MdButton {
    constructor(element) {
        this.element = element;
        this.disabled = false;
        this.flat = false;
        this.floating = false;
        this.large = false;
        this.pulse = false;
        this.attributeManager = new attributeManager_1.AttributeManager(element);
    }
    disabledChanged(newValue) {
        if (attributes_1.getBooleanFromAttributeValue(newValue)) {
            this.attributeManager.addClasses("disabled");
        }
        else {
            this.attributeManager.removeClasses("disabled");
        }
    }
    flatChanged(newValue) {
        if (attributes_1.getBooleanFromAttributeValue(newValue)) {
            this.attributeManager.removeClasses(["btn", "accent"]);
            this.attributeManager.addClasses("btn-flat");
        }
        else {
            this.attributeManager.removeClasses("btn-flat");
            this.attributeManager.addClasses(["btn", "accent"]);
        }
    }
    pulseChanged(newValue) {
        if (attributes_1.getBooleanFromAttributeValue(newValue)) {
            this.attributeManager.addClasses("pulse");
        }
        else {
            this.attributeManager.removeClasses("pulse");
        }
    }
    attached() {
        const classes = [];
        if (attributes_1.getBooleanFromAttributeValue(this.flat)) {
            classes.push("btn-flat");
        }
        if (attributes_1.getBooleanFromAttributeValue(this.floating)) {
            classes.push("btn-floating");
        }
        if (attributes_1.getBooleanFromAttributeValue(this.large)) {
            classes.push("btn-large");
        }
        if (classes.length === 0) {
            classes.push("btn");
        }
        if (attributes_1.getBooleanFromAttributeValue(this.disabled)) {
            classes.push("disabled");
        }
        if (!attributes_1.getBooleanFromAttributeValue(this.flat)) {
            classes.push("accent");
        }
        if (attributes_1.getBooleanFromAttributeValue(this.pulse)) {
            classes.push("pulse");
        }
        this.attributeManager.addClasses(classes);
    }
    detached() {
        this.attributeManager.removeClasses(["accent", "btn", "btn-flat", "btn-large", "disabled", "pulse"]);
    }
};
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdButton.prototype, "disabled", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdButton.prototype, "flat", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdButton.prototype, "floating", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdButton.prototype, "large", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdButton.prototype, "pulse", void 0);
MdButton = __decorate([
    aurelia_framework_1.customAttribute("md-button"),
    aurelia_framework_1.autoinject,
    __metadata("design:paramtypes", [Element])
], MdButton);
exports.MdButton = MdButton;
