var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customAttribute, autoinject } from "aurelia-framework";
let MdScrollfireTarget = class MdScrollfireTarget {
    constructor() {
        this.callback = null;
        this.offset = 0;
    }
};
__decorate([
    bindable,
    __metadata("design:type", Function)
], MdScrollfireTarget.prototype, "callback", void 0);
__decorate([
    bindable,
    __metadata("design:type", Number)
], MdScrollfireTarget.prototype, "offset", void 0);
MdScrollfireTarget = __decorate([
    customAttribute("md-scrollfire-target"),
    autoinject
], MdScrollfireTarget);
export { MdScrollfireTarget };