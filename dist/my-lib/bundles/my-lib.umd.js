(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/core'], factory) :
    (factory((global['my-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyLibService = /** @class */ (function () {
        function MyLibService() {
        }
        MyLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MyLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ MyLibService.ngInjectableDef = i0.defineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
        return MyLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyLibComponent = /** @class */ (function () {
        function MyLibComponent() {
        }
        /**
         * @return {?}
         */
        MyLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MyLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-my-lib',
                        template: "\n    <p>\n      my-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        MyLibComponent.ctorParameters = function () { return []; };
        return MyLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
            this.alertClass = 'alert-success';
        }
        /**
         * @return {?}
         */
        AlertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        AlertComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-alert',
                        template: "<div class=\"alert alert-warning\" role=\"alert\">\n    <ng-content></ng-content>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AlertComponent.ctorParameters = function () { return []; };
        AlertComponent.propDecorators = {
            alertClass: [{ type: i0.Input }]
        };
        return AlertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        MyLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [MyLibComponent, AlertComponent],
                        imports: [],
                        exports: [MyLibComponent]
                    },] }
        ];
        return MyLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MyLibService = MyLibService;
    exports.MyLibComponent = MyLibComponent;
    exports.MyLibModule = MyLibModule;
    exports.AlertComponent = AlertComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=my-lib.umd.js.map