const Manager=require("../lib/Manager");

test("test office number", () => {
    const officeNumber=101;
    const employee=new Manager("Jiayu",28636,"wangjiayususan@gmail.com",officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});

test("get office number through getofficeNumber method", () => {
    const testofficeNumber=101;
    const employee=new Manager("Jiayu",28636,"wangjiayususan@gmail.com", testofficeNumber);
    expect(employee.getofficeNumber()).toBe(testofficeNumber);
});

test("test role", () => {
    const role="Manager";
    const employee=new Manager("Jiayu",28636,"wangjiayususan@gmail.com",101);
    expect(employee.getRole()).toBe(role);
});