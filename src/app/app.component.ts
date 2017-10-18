import { Component } from '@angular/core';
import { Student } from './person/shared/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Update Person';
	fullName = '';
	studentObj = new Student(100, 'Mahesh', 'Sharma');
	saveData(emp) {
	    this.fullName = emp.fname + ' ' + emp.lname ;
    }		
}
