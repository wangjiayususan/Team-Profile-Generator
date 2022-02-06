const Employee=require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber=officeNumber;        
    }
//return office number from input
    getofficeNumber() {
        return this.officeNumber;
    }
//override employee role
    getRole () {
        return 'Manager'
    }
};

module.exports=Manager;