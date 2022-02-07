const Intern=require("../lib/Intern");

test("test school", () => {
    const school ="Harvard University";
    const employee=new Intern("Jiayu",28636,"wangjiayususan@gmail.com",school);
    expect(employee.school).toBe(school);
});

test("get test school through getSchool method", () => {
    const testSchool="Harvard University";
    const employee=new Intern("Jiayu",28636,"wangjiayususan@gmail.com",testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});

test("test role", () => {
    const role="Intern";
    const employee=new Intern("Jiayu",28636,"wangjiayususan@gmail.com", "Harvard University");
    expect(employee.getRole()).toBe(role);
});