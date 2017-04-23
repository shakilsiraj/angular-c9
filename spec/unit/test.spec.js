"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
describe("Tesing project setup", function () {
    it("Tesing that unit test setup is running", function () {
        var toBeTrue = true;
        var toBeFalse = false;
        expect(toBeTrue).toBeTruthy();
        expect(toBeFalse).toBeFalsy();
    });
    it("Testing a class instance", function () {
        var test = (function () {
            function test() {
                this.random = Math.random();
            }
            return test;
        }());
        var instance = new test();
        expect(instance.random > 0).toBeTruthy();
    });
});
describe("Testing Angular features", function () {
    it("Testing components", function () {
        var ContainerTestComponent = (function () {
            function ContainerTestComponent() {
            }
            return ContainerTestComponent;
        }());
        ContainerTestComponent = __decorate([
            core_1.Component({
                selector: 'container-test',
                template: '<div>Hello Testing</div>',
                encapsulation: core_1.ViewEncapsulation.None
            })
        ], ContainerTestComponent);
        testing_1.TestBed.configureTestingModule({
            declarations: [ContainerTestComponent]
        });
        var fixture = testing_1.TestBed.createComponent(ContainerTestComponent);
        var debugElement = fixture.debugElement;
        var nativeElement = debugElement.nativeElement;
        expect(nativeElement.innerHTML).toBe("<div>Hello Testing</div>");
    });
});
//# sourceMappingURL=test.spec.js.map