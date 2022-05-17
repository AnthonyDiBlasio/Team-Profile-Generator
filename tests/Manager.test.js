const Manager = require("../lib/Manager.js")

describe("Manager", () => {
    describe("constructor", () => {
        it("should provide the managers's name, id number, email address and office number when args are passed.", () => {
            const name = "Anthony";
            const id = 123;
            const email = "ad@test.com";
            const officeNumber = 300;
            const em = new Manager(name, id, email, officeNumber);
            expect(em.name).toEqual(name);
            expect(em.id).toEqual(id);
            expect(em.email).toEqual(email);
            expect(em.officeNumber).toEqual(officeNumber);
        });
    });
    describe("getRole", () => {
        it("should return the value of the manager's role", () => {
            const expected = "Manager";
            const em = new Manager();
            const answer = em.getRole();
            expect(answer).toEqual(expected);
        });
    });
});