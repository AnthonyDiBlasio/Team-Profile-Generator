const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("constructor", () => {
    it("should set `string` prop when given a string", () => {

      const Mystr = ('Anthony',100,'anthony,diblasio@gmail.com');
      const t = new Employee();
      expect(Mystr).toEqual(t);
    });
  });
  describe("getEmployee", () => {
    it("should get turtle twice when str is equal to str", () => {
      const str = str;
      const expected = "Turtle Turtle ";
      const t = new Employee(str);

      const answer = t.getEmployee();

      expect(answer).toEqual(expected);
    });
  })
});