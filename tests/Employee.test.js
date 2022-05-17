const Employee = require("../lib/Employee.js")

describe("Employee", () => {
    describe("constructor", () => {
        it("should provide the employee's name, id number and email address when arguments are passed.", () => {
            const name = "Anthony";
            const id = 123;
            const email = "ad@test.com";
            const em = new Employee(name, id, email);
            expect(em.name).toEqual(name);
            expect(em.id).toEqual(id);
            expect(em.email).toEqual(email);
        });
    });
    describe("getName", () => {
        it("should return the value of the 'name' parameter", () => {
            const name = "Anthony";
            const id = 123;
            const email = "ad@test.com";
            const expected = "Anthony";
            const em = new Employee(name, id, email);
            const answer = em.getName();
            expect(answer).toEqual(expected);
        });
    });
    describe("getId", () => {
        it("should return the value of the 'id' parameter", () => {
            const name = "Anthony";
            const id = 123;
            const email = "ad@test.com";
            const expected = 123;
            const em = new Employee(name, id, email);
            const answer = em.getId();
            expect(answer).toEqual(expected);
        });
    });
    describe("getEmail", () => {
        it("should return the value of the 'email' parameter", () => {
            const name = "Anthony";
            const id = 123;
            const email = "ad@test.com";
            const expected = "ad@test.com";
            const em = new Employee(name, id, email);
            const answer = em.getEmail();
            expect(answer).toEqual(expected);
        });
    });
    describe("getRole", () => {
        it("should return the value of the employee's role", () => {
            const expected = "Employee";
            const em = new Employee();
            const answer = em.getRole();
            expect(answer).toEqual(expected);
        });
    });
});