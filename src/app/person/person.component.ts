import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Student } from './shared/student';
import { Employee } from './shared/employee';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() student : Student;
  @Output() updateEmployee = new EventEmitter<Employee>();
  employee = new Employee();  
  update() {
    this.employee.fname = this.student.fname;		
    this.employee.lname = this.student.lname;
  
    this.updateEmployee.emit(this.employee);
  }	

}
