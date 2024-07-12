import { Component } from '@angular/core';
import {NgIf, NgFor,} from '@angular/common';
import { CustomerService } from '../services/customer.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Customer } from '../model/customer.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

   customers!: Observable<Array<Customer>>;
  errorMessage!: string;
  searchFormGroup! : FormGroup;

  constructor(private customerService : CustomerService, 
              private fb : FormBuilder     
          ){}

  ngOnInit():void{
   this.searchFormGroup = this.fb.group({
          keyword : this.fb.control("null")
    });
    this.customers=this.customerService.getCustomers().pipe(
      catchError(err=>{
        this.errorMessage=err.message;
       return throwError(err);
      })
    ); 
   }
   handleSearchCustomer(){

   }
}
