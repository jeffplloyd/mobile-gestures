/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
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
export { AlertComponent };
if (false) {
    /** @type {?} */
    AlertComponent.prototype.alertClass;
    /** @type {?} */
    AlertComponent.prototype.dismissable;
    /** @type {?} */
    AlertComponent.prototype.show;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktbGliLyIsInNvdXJjZXMiOlsibGliL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTFFO0lBeUJFO1FBSlMsZUFBVSxHQUFXLGVBQWUsQ0FBQTtRQUNwQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUN0QyxTQUFJLEdBQVksSUFBSSxDQUFDO0lBRUwsQ0FBQzs7OztJQUVqQixpQ0FBUTs7O0lBQVI7UUFDRSxJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBTSxJQUFJLENBQUMsVUFBVSxpQ0FBOEIsQ0FBQztTQUNwRTtJQUNILENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGdZQUFxQztvQkFFckMsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FDTCxRQUFRLEVBQUU7NEJBQ1IsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDbkIsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUM7Z0NBQ3hDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDOzZCQUN4RSxDQUFDOzRCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDO2dDQUN6QyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQzs2QkFDdkUsQ0FBQzt5QkFDSCxDQUNGO3FCQUNGO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7OzZCQUVFLEtBQUs7OEJBQ0wsS0FBSzs7SUFXUixxQkFBQztDQUFBLEFBakNELElBaUNDO1NBYlksY0FBYzs7O0lBQ3pCLG9DQUE2Qzs7SUFDN0MscUNBQXNDOztJQUN0Qyw4QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcihcbiAgICAgICdleHBhbmQnLCBbXG4gICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgICBzdHlsZSh7aGVpZ2h0OiBcIjBcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCJ9KSxcbiAgICAgICAgICBhbmltYXRlKCc1MDBtcyBlYXNlLWluLW91dCcsIHN0eWxlKHtoZWlnaHQ6IFwiKlwiLCBvdmVyZmxvdzogXCJ2aXNpYmxlXCJ9KSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgICBzdHlsZSh7aGVpZ2h0OiBcIipcIiwgb3ZlcmZsb3c6IFwidmlzaWJsZVwifSksXG4gICAgICAgICAgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7aGVpZ2h0OiBcIjBcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCJ9KSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhbGVydENsYXNzOiBzdHJpbmcgPSAnYWxlcnQtc3VjY2VzcydcbiAgQElucHV0KCkgZGlzbWlzc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvdzogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZih0aGlzLmRpc21pc3NhYmxlKSB7XG4gICAgICB0aGlzLmFsZXJ0Q2xhc3MgPSBgJHt0aGlzLmFsZXJ0Q2xhc3N9IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvd2A7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==