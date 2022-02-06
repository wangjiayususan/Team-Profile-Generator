const Employee=require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github=github;
    }
//return github from input
    getGithub() {
        return this.github;
    }
//override employee role
    getRole() {
        return 'Engineer';
    }
};

module.exports=Engineer;
