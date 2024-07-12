import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';



export const routesConfig: Routes = [
  
    {
      path: 'customers', component: CustomersComponent, title: 'Customers',
    },
    {
        path: 'accounts', component: AccountsComponent, title: 'Accounts',
    },

];
export default routesConfig;
