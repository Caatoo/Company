import { EmployeeService } from './../../../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <div><button type="button" class="btn btn-secondary">Employees</button>
  <button (click)="toggleMe()" type="button" class="btn btn-secondary">Department</button>
  <h2 class="depart" *ngIf="showMe">Departments component</h2>

    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  </div>`
  
  ,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  showMe:boolean=false
  public employees = Array();
  
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

  toggleMe(){
    this.showMe=!this.showMe
  }
  


}

