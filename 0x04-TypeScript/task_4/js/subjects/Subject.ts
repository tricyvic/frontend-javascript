namespace Subjects {
    export class Subject {
        teacher: Teacher;

        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }

        // set the instance attribute teacher with it
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}