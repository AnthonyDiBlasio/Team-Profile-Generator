const Engineer = require("../lib/Engineer.js")

describe("Engineer", () => {
    describe("constructor", () => {
        it("should provide the engineer's name, id number, email address and github when arguments are passed.", () => {
            const name = "Anthony";
            const id = 123;
            const email = "ad@test.com";
            const github = "AnthonyDiBlasio";
            const em = new Engineer(name, id, email, github);
            expect(em.name).toEqual(name);
            expect(em.id).toEqual(id);
            expect(em.email).toEqual(email);
            expect(em.github).toEqual(github);

        });
    });
    describe("getGithub", () => {
        it("should return the value of the 'github' parameter", () => {
            const name = "Anthony";
            const id = 123;
            const email = "ad@test.com";
            const github = "AnthonyDiBlasio";
            const expected = "AnthonyDiBlasio";
            const em = new Engineer(name, id, email, github);
            const answer = em.getGithub();
            expect(answer).toEqual(expected);
        });
    });
    describe("getRole", () => {
        it("should return the value of the engineer's role", () => {
            const expected = "Engineer";
            const em = new Engineer();
            const answer = em.getRole();
            expect(answer).toEqual(expected);
        });
    });
});