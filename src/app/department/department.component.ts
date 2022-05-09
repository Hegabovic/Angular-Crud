import {Component, OnInit} from '@angular/core';
import {Department} from "../_model/department";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent{

  selectedDepartment: Department = new Department();
  //data variable properties
  nDep: Department = new Department();


  deps: Department[] = [
    new Department(56, "Abdullah", "ALexandria"),
    new Department(63, "Hegab", "Cairo"),
    new Department(54, "Hegabovic", "Alex"),
  ]


  add() {
    this.deps.push(new Department(this.nDep.id, this.nDep.depName, this.nDep.location))
    this.nDep.id = 0;
    this.nDep.depName = '';
    this.nDep.location = "";
  }


  edit(id: number) {
    let newDepartment = this.deps.find(department => {
      return department.id === id
    });
    if (newDepartment) {
      this.selectedDepartment.id = newDepartment.id;
      this.selectedDepartment.depName = newDepartment.depName;
      this.selectedDepartment.location = newDepartment.location;
      console.log()
    }
  }

  save(id: number) {
    let departmentIndex = this.deps.findIndex(department => department.id === id);

    this.deps.splice(departmentIndex, 1,
      new Department(this.selectedDepartment.id,
        this.selectedDepartment.depName,
        this.selectedDepartment.location,
      ))
  }

  delete(id: number) {
    for (let i = 0; i < this.deps.length; i++) {
      let dep = this.deps[i];
      if (id == dep.id) {
        this.deps.splice(i, 1);
      }
    }
  }
}



