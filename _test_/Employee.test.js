const Employee=require("../lib/Employee");

test("create a new employee", () => {
    const employee=new Employee();
    expect(typeof(employee)).toBe("object");
})
test("test name", () => {
    const name="Jiayu";
    const employee=new Employee(name);
    expect(employee.name).toBe(name);
})
test("test ID", () => {
    const id=28636;
    const employee=new Employee("Jiayu",id);
    expect(employee.id).toBe(id);
})
test("test email", () => {
    const email="wangjiayususan@gmail.com";
    const employee=new Employee("Jiayu",28636,email);
    expect(employee.email).toBe(email);
})


test("get name through getName method", () => {
    const testName="Jiayu";
    const employee=new Employee(testName);
    expect(employee.getName()).toBe(testName);
})
test("get test ID through getID method", () => {
    const testID=28636;
    const employee=new Employee("Jiayu", testID);
    expect(employee.getId()).toBe(testID);
})
test("get test email through getEmail method.", () => {
    const testEmail="wangjiayususan@gmail.com";
    const employee=new Employee("Jiayu",28636,testEmail);
    expect(employee.getEmail()).toBe(testEmail);
})


test("test role.", () => {
    const role="Employee";
    const employee=new Employee("Jiayu",28636,"wangjiayususan@gmail.com");
    expect(employee.getRole()).toBe(role);
})
