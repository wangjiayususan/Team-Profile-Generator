const Engineer=require("../lib/Engineer");

test("test github", () => {
    const github = "wangjiayususan";
    const employee=new Engineer("Jiayu",28636,"wangjiayususan@gmail.com", github);
    expect(employee.github).toBe(github);
});

test("get github through getGithub method", () => {
    const testGithub="wangjiayususan";
    const employee=new Engineer("Jiayu",28636,"wangjiayususan@gmail.com",testGithub);
    expect(employee.getGithub()).toBe(testGithub);
});

test("test role", () => {
    const role="Engineer";
    const employee=new Engineer("Jiayu",28636,"wangjiayususan@gmail.com","wangjiayususan");
    expect(employee.getRole()).toBe(role);
});