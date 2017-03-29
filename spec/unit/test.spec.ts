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