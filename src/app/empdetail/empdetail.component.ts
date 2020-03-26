import { Component, OnInit } from '@angular/core';
import { TaxcalculateService } from '../taxcalculate.service';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
  
})
export class EmpdetailComponent implements OnInit {

  constructor(private taxservice:TaxcalculateService) { }

  ngOnInit(): void {
  }

  calcu()
  {
this.taxservice.calculateTax(60000);
  }
}
