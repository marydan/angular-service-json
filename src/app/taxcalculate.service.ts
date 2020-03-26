import { Injectable } from '@angular/core';

@Injectable(
 {
  providedIn: 'root'
}
)
export class TaxcalculateService {

  constructor() {

      }

      calculateTax(salary : number)
      {
        if(salary>40000)
        console.log(salary*7/100);
        else if(salary>80000)
console.log(salary*18/100);
      }
}
