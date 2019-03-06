(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/platform-browser'), require('@angular/core'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/common', '@angular/platform-browser', '@angular/core', '@angular/animations'], factory) :
    (factory((global['my-lib'] = {}),global.ng.common,global.ng.platformBrowser,global.ng.core,global.ng.animations));
}(this, (function (exports,common,platformBrowser,i0,animations) { 'use strict';

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
            this.dismissable = false;
            this.show = true;
        }
        /**
         * @return {?}
         */
        AlertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.dismissable) {
                    this.alertClass = this.alertClass + " alert-dismissible fade show";
                }
            };
        AlertComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-alert',
                        template: "<div *ngIf=\"show\" [@expand] class=\"alert-container\">\n    <div class=\"alert\" [ngClass]=\"alertClass\" role=\"alert\">\n        <ng-content></ng-content>\n        <button *ngIf=\"dismissable\" type=\"button\" class=\"close\" (click)=\"show = !show\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n</div>\n",
                        animations: [
                            animations.trigger('expand', [
                                animations.transition(':enter', [
                                    animations.style({ height: "0", overflow: "hidden" }),
                                    animations.animate('500ms ease-in-out', animations.style({ height: "*", overflow: "visible" }))
                                ]),
                                animations.transition(':leave', [
                                    animations.style({ height: "*", overflow: "visible" }),
                                    animations.animate('500ms ease-in-out', animations.style({ height: "0", overflow: "hidden" }))
                                ])
                            ])
                        ],
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [".alert-container{overflow:hidden}"]
                    }] }
        ];
        /** @nocollapse */
        AlertComponent.ctorParameters = function () { return []; };
        AlertComponent.propDecorators = {
            alertClass: [{ type: i0.Input }],
            dismissable: [{ type: i0.Input }]
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
                        imports: [
                            common.CommonModule,
                            platformBrowser.BrowserModule
                        ],
                        exports: [MyLibComponent, AlertComponent]
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