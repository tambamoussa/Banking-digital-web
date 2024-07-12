import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomersComponent } from '../customers/customers.component';
import { AccountsComponent } from '../accounts/accounts.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, AccountsComponent, CustomersComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
