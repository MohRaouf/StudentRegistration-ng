import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'register-ng';

  students: Array<{ name: string, age: number }> = []
  registerStudent(newStudent: { name: string, age: number }) {
    let matchedStudents = this.students.filter((student) => { return (student.name == newStudent.name) })
    if ((matchedStudents.length == 0)) {
      this.students.push(newStudent);
      console.log(`Saved :  ${this.students[0].name}`)
    }
  }
}
