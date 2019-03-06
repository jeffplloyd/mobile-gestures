import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable, Component, Input, ViewEncapsulation, NgModule, defineInjectable } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyLibService = /** @class */ (function () {
    function MyLibService() {
    }
    MyLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MyLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ MyLibService.ngInjectableDef = defineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: Component, args: [{
                    selector: 'lib-alert',
                    template: "<div *ngIf=\"show\" [@expand] class=\"alert-container\">\n    <div class=\"alert\" [ngClass]=\"alertClass\" role=\"alert\">\n        <ng-content></ng-content>\n        <button *ngIf=\"dismissable\" type=\"button\" class=\"close\" (click)=\"show = !show\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n</div>\n",
                    animations: [
                        trigger('expand', [
                            transition(':enter', [
                                style({ height: "0", overflow: "hidden" }),
                                animate('500ms ease-in-out', style({ height: "*", overflow: "visible" }))
                            ]),
                            transition(':leave', [
                                style({ height: "*", overflow: "visible" }),
                                animate('500ms ease-in-out', style({ height: "0", overflow: "hidden" }))
                            ])
                        ])
                    ],
                    encapsulation: ViewEncapsulation.None,
                    styles: [".alert-container{overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return []; };
    AlertComponent.propDecorators = {
        alertClass: [{ type: Input }],
        dismissable: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [MyLibComponent, AlertComponent],
                    imports: [
                        CommonModule,
                        BrowserModule
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

export { MyLibService, MyLibComponent, MyLibModule, AlertComponent };

//# sourceMappingURL=my-lib.js.map