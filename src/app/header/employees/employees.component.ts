import { Component, OnInit } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  title = '?';
  data: any;
  showData = false;

  constructor(private http: Http) { }
  
  ngOnInit(): void {
    let headers = new Headers();
    headers.append('Contetn-Type', 'application/json');
    this.http.get('/assets/employee.json', { headers: headers}).map((res: { json: () => any; }) => res.json()).subscribe((data: any) => {
    this.data = data;
    })
  }
 chgTab1(){
   this.title = "Change Title";
 }
 chgTab2(){
   //Want to display the itmes from json file
   this.showData = !this.showData;
 }
}
