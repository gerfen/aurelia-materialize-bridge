import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdTabs = /** @class */ (function () {
    function MdTabs(element, taskQueue) {
        var _this = this;
        this.element = element;
        this.taskQueue = taskQueue;
        this.tabAttributeManagers = [];
        this.fixed = false;
        this.swipeable = false;
        this.transparent = false;
        this.fireTabSelectedEvent = function (e) {
            var href = e.target.getAttribute("href");
            au.fireMaterializeEvent(_this.element, "selected", href);
        };
        this.attributeManager = new au.AttributeManager(this.element);
    }
    MdTabs.prototype.fixedChanged = function (newValue) {
        if (newValue) {
            this.attributeManager.addClasses("tabs-fixed-width");
        }
        else {
            this.attributeManager.removeClasses("tabs-fixed-width");
        }
    };
    MdTabs.prototype.transparentChanged = function (newValue) {
        if (newValue) {
            this.attributeManager.addClasses("tabs-transparent");
        }
        else {
            this.attributeManager.removeClasses("tabs-transparent");
        }
    };
    MdTabs.prototype.attached = function () {
        var _this = this;
        this.attributeManager.addClasses("tabs");
        var children = this.element.querySelectorAll("li");
        try {
            for (var _a = tslib_1.__values(Array.from(children)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var child = _b.value;
                var setter = new au.AttributeManager(child);
                setter.addClasses(["tab", "primary-text"]);
                this.tabAttributeManagers.push(setter);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var self = this;
        var options = {
            swipeable: this.swipeable,
            responsiveThreshold: this.responsiveThreshold,
            onShow: function (newContent) { return au.fireMaterializeEvent(_this.element, "show", { newContent: newContent }); }
        };
        au.cleanOptions(options);
        this.instance = new M.Tabs(this.element, options);
        var childAnchors = this.element.querySelectorAll("li a");
        try {
            for (var _d = tslib_1.__values(Array.from(childAnchors)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var a = _e.value;
                a.addEventListener("click", this.fireTabSelectedEvent);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var e_1, _c, e_2, _f;
    };
    MdTabs.prototype.detached = function () {
        this.instance.destroy();
        this.attributeManager.removeClasses("tabs");
        this.tabAttributeManagers.forEach(function (setter) {
            setter.removeClasses("tab");
        });
        this.tabAttributeManagers = [];
        var childAnchors = this.element.querySelectorAll("li a");
        try {
            for (var _a = tslib_1.__values(Array.from(childAnchors)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var a = _b.value;
                a.removeEventListener("click", this.fireTabSelectedEvent);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var e_3, _c;
    };
    MdTabs.prototype.refresh = function () {
        var _this = this;
        this.taskQueue.queueTask(function () {
            _this.detached();
            _this.attached();
        });
    };
    MdTabs.prototype.updateTabIndicator = function () {
        this.instance.updateTabIndicator();
    };
    MdTabs.prototype.select = function (id) {
        this.instance.select(id);
        au.fireMaterializeEvent(this.element, "selected", "#" + id);
    };
    Object.defineProperty(MdTabs.prototype, "selectedTab", {
        // FIXME: probably bad - binding this introduces dirty checking
        get: function () {
            return this.instance.index;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdTabs.prototype, "fixed", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd,
        tslib_1.__metadata("design:type", Number)
    ], MdTabs.prototype, "responsiveThreshold", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdTabs.prototype, "swipeable", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdTabs.prototype, "transparent", void 0);
    MdTabs = tslib_1.__decorate([
        au.customAttribute("md-tabs"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
    ], MdTabs);
    return MdTabs;
}());
export { MdTabs };
//# sourceMappingURL=tabs.js.map