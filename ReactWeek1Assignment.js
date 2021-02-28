class Student {
    constructor (name,email,community) { 
        this.name = name;
        this.email = email;
        this.community = community;  
    }
}

class Bootcamp {
    constructor (name, level, students = []) {
        this.name = name;
        this.level= level;
        this.students = students;
    }
    registerStudent(studentReg) {
        if (this.students.filter(s => s.email === studentReg.email).length>0) {
            console.log(`${studentReg.email} already exists in the ${this.name} bootcamp.`);
        } else {
            this.students.push(studentReg);
            console.log(`Registering ${studentReg.email} to the bootcamp ${this.name}!`);
            return this.students;
        }
    }
};
