System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function discard(discardable) {
        if (discardable) {
            discardable.discard();
        }
    }
    exports_1("discard", discard);
    var DiscardablePromise;
    return {
        setters: [],
        execute: function () {
            DiscardablePromise = /** @class */ (function () {
                function DiscardablePromise(promise) {
                    this.promise = promise;
                }
                DiscardablePromise.prototype.then = function (onfulfilled, onrejected) {
                    var _this = this;
                    return this.promise.then(function (x) {
                        if (_this.isDiscarded) {
                            return Promise.reject(DiscardablePromise.discarded);
                        }
                        else {
                            return Promise.resolve(x);
                        }
                    }).then(onfulfilled, onrejected);
                };
                DiscardablePromise.prototype.discard = function () {
                    this.isDiscarded = true;
                };
                DiscardablePromise.discarded = Symbol("discarded");
                return DiscardablePromise;
            }());
            exports_1("DiscardablePromise", DiscardablePromise);
        }
    };
});
//# sourceMappingURL=discardable-promise.js.map