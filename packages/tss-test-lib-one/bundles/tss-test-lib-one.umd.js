(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('tss-test-lib-one', ['exports', '@angular/core'], factory) :
    (factory((global['tss-test-lib-one'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssTestLibOneService = (function () {
        function TssTestLibOneService() {
        }
        TssTestLibOneService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TssTestLibOneService.ctorParameters = function () { return []; };
        /** @nocollapse */ TssTestLibOneService.ngInjectableDef = i0.defineInjectable({ factory: function TssTestLibOneService_Factory() { return new TssTestLibOneService(); }, token: TssTestLibOneService, providedIn: "root" });
        return TssTestLibOneService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssTestLibOneComponent = (function () {
        function TssTestLibOneComponent() {
        }
        /**
         * @return {?}
         */
        TssTestLibOneComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TssTestLibOneComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-tss-test-lib-one',
                        template: "\n    <p>\n      tss-test-lib-one works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        TssTestLibOneComponent.ctorParameters = function () { return []; };
        return TssTestLibOneComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssTestLibOneModule = (function () {
        function TssTestLibOneModule() {
        }
        TssTestLibOneModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [TssTestLibOneComponent],
                        exports: [TssTestLibOneComponent]
                    },] },
        ];
        return TssTestLibOneModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TssTestLibOneService = TssTestLibOneService;
    exports.TssTestLibOneComponent = TssTestLibOneComponent;
    exports.TssTestLibOneModule = TssTestLibOneModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNzLXRlc3QtbGliLW9uZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3Rzcy10ZXN0LWxpYi1vbmUvbGliL3Rzcy10ZXN0LWxpYi1vbmUuc2VydmljZS50cyIsIm5nOi8vdHNzLXRlc3QtbGliLW9uZS9saWIvdHNzLXRlc3QtbGliLW9uZS5jb21wb25lbnQudHMiLCJuZzovL3Rzcy10ZXN0LWxpYi1vbmUvbGliL3Rzcy10ZXN0LWxpYi1vbmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHNzVGVzdExpYk9uZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdHNzLXRlc3QtbGliLW9uZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICB0c3MtdGVzdC1saWItb25lIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBUc3NUZXN0TGliT25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUc3NUZXN0TGliT25lQ29tcG9uZW50IH0gZnJvbSAnLi90c3MtdGVzdC1saWItb25lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVHNzVGVzdExpYk9uZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUc3NUZXN0TGliT25lQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUc3NUZXN0TGliT25lTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7bUNBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLHlDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFFBQVEsRUFBRSx3REFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OztxQ0FWRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7d0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO3FCQUNsQzs7a0NBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=