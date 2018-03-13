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
const aurelia_task_queue_1 = require("aurelia-task-queue");
const aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
const aurelia_logging_1 = require("aurelia-logging");
let MdInputUpdateService = class MdInputUpdateService {
    constructor(taskQueue) {
        this.taskQueue = taskQueue;
        this.updateCalled = false;
        this.log = aurelia_logging_1.getLogger("MdInputUpdateService");
        this.taskQueue = taskQueue;
    }
    materializeUpdate() {
        this.log.debug("executing Materialize.updateTextFields");
        Materialize.updateTextFields();
        this.updateCalled = false;
    }
    update() {
        this.log.debug("update called");
        if (!this.updateCalled) {
            this.updateCalled = true;
            this.taskQueue.queueTask(this.materializeUpdate.bind(this));
        }
    }
};
MdInputUpdateService = __decorate([
    aurelia_dependency_injection_1.autoinject,
    __metadata("design:paramtypes", [aurelia_task_queue_1.TaskQueue])
], MdInputUpdateService);
exports.MdInputUpdateService = MdInputUpdateService;
