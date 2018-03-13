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
let MdPushpin = class MdPushpin {
    constructor(element) {
        this.element = element;
        this.bottom = Infinity;
        this.offset = 0;
        this.top = 0;
    }
    attached() {
        $(this.element).pushpin({
            bottom: (this.bottom === Infinity ? Infinity : parseInt(this.bottom.toString(), 10)),
            offset: parseInt(this.offset.toString(), 10),
            top: parseInt(this.top.toString(), 10)
        });
    }
    detached() {
        // destroy handler not available
    }
};
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdPushpin.prototype, "bottom", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdPushpin.prototype, "offset", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdPushpin.prototype, "top", void 0);
MdPushpin = __decorate([
    aurelia_framework_1.customAttribute("md-pushpin"),
    aurelia_framework_1.autoinject,
    __metadata("design:paramtypes", [Element])
], MdPushpin);
exports.MdPushpin = MdPushpin;
