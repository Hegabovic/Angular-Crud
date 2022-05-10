import {Component} from "@angular/core";
import {Student} from "../../_model/student";

@Component({
  selector: 'app-studentCrud',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {
  selectedStudent: Student = new Student();
  //data variable properties
  nStd: Student = new Student();


  stds: Student[] = [
    new Student(56, "Abdullah", 25, 2),
    new Student(63, "Hegab", 26, 3),
    new Student(54, "Hegabovic", 27, 4),
  ]


  add() {
    this.stds.push(new Student(this.nStd.id, this.nStd.name, this.nStd.age, this.nStd.depNo))
    this.nStd.id = 0;
    this.nStd.name = '';
    this.nStd.age = 0;
    this.nStd.depNo = 0;
  }


  edit(id: number) {
    let newStudent = this.stds.find(student => {
      return student.id === id
    });
    console.log(newStudent)
    if (newStudent) {
      this.selectedStudent.id = newStudent.id;
      this.selectedStudent.name = newStudent.name;
      this.selectedStudent.age = newStudent.age;
      this.selectedStudent.depNo = newStudent.depNo;
      console.log()
    }
  }

  save(id: number) {
    let studentIndex = this.stds.findIndex(student => student.id === id);
    console.log(`id ${id}`)
    console.log(studentIndex)
    this.stds.splice(studentIndex, 1,
      new Student(this.selectedStudent.id,
        this.selectedStudent.name,
        this.selectedStudent.age,
        this.selectedStudent.depNo,
      ))
  }

  delete(id: number) {
    for (let i = 0; i < this.stds.length; i++) {
      let std = this.stds[i];
      if (id == std.id) {
        this.stds.splice(i, 1);
      }
    }
  }
}
