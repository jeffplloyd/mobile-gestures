import { Injectable, Component, Input, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibService {
    constructor() { }
}
MyLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MyLibService.ctorParameters = () => [];
/** @nocollapse */ MyLibService.ngInjectableDef = defineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MyLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-my-lib',
                template: `
    <p>
      my-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
MyLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertComponent {
    constructor() {
        this.alertClass = 'alert-success';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-alert',
                template: "<div class=\"alert alert-warning\" role=\"alert\">\n    <ng-content></ng-content>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    alertClass: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyLibModule {
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MyLibComponent, AlertComponent],
                imports: [],
                exports: [MyLibComponent]
            },] }
];

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