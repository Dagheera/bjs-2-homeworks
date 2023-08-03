function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks') === true) {
        this.marks.push(...marks);
    }    
}

Student.prototype.getAverage = function () {
   if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
       return 0;
   }
    let sum = 0;
    sum = this.marks.reduce((currentSum, currentVal) => currentSum + currentVal, 0);
    return +(sum / this.marks.length).toFixed(2);  
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.marks;
    delete this.subject;

}
