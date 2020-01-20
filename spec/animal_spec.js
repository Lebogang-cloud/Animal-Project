let Animal = require("../src/animal");


describe("Animal attributes", function(){
    let dog = new Animal()
    it("animal should make a sound", function(){
        expect(dog.sound()).toBe("sound")
    })

    let cat = new Animal()
    it("animal should make a sound", function(){
        expect(cat.sound()).toBe("sound")
    })
});