import { Component, ViewEncapsulation, DebugElement} from '@angular/core';
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe("Tesing project setup", ()=>{
    it("Tesing that unit test setup is running", ()=>{
        let toBeTrue: boolean = true;
        let toBeFalse: boolean = false;
        
        expect(toBeTrue).toBeTruthy();
        expect(toBeFalse).toBeFalsy();
    });
    
    it("Testing a class instance", ()=>{
        class test {
            random: number = Math.random();
        }
        
        let instance = new test();
        expect(instance.random > 0).toBeTruthy();
        
    });
});

describe("Testing Angular features", ()=>{
    it("Testing components", ()=>{
        
        @Component({
            selector: 'container-test',
            template: '<div>Hello Testing</div>',
            encapsulation: ViewEncapsulation.None
        })
        class ContainerTestComponent {}
        

        TestBed.configureTestingModule({
            declarations: [ContainerTestComponent]
        });
        
        let fixture: ComponentFixture<ContainerTestComponent> = TestBed.createComponent(ContainerTestComponent);
        let debugElement: DebugElement = fixture.debugElement;
        let nativeElement : HTMLElement = debugElement.nativeElement;
        expect(nativeElement.innerHTML).toBe("<div>Hello Testing</div>");
        
    });
    
    
});