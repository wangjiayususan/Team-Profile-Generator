const Employee=require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school=school;        
    }
//return school from input
    getSchool() {
        return this.school;
    }
//override employee role
    getRole() {
        return 'Intern'
    }
};

module.exports=Intern;