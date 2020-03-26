import { Component, OnInit } from '@angular/core';
import { Employee } from '../emp';
import { TaxcalculateService } from '../taxcalculate.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  empobj : Employee;
  employees : Array<Employee> =[];

  constructor( )
     {
   this.empobj=new Employee( );
      }
  
  ngOnInit(): void {

  }
   addEmp()
      {
        this.employees.push(this.empobj);

     this.empobj=new Employee();
   
     
   }


}
