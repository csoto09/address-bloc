const MenuController = require("../controllers/MenuController")
describe("MenuController", () => {
    beforeEach(() => {
        this.menu = new MenuController()
    });
    describe("#remindMe()", () => {
        it("should return a string", () => {
            expect(typeof this.menu.remindMe()).toBe('string');
        });
        it("should remind me that 'Learning is a life-long pursuit' when called", () => {
            expect(this.menu.remindMe()).toMatch("Learning is a life-long pursuit");
        });
    });
});