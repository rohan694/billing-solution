import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompanySearchComponent } from './components/company-search/company-search.component';
import { CreditorsComponent } from './components/creditors/creditors.component';
import { DebtorsComponent } from './components/debtors/debtors.component';
import { SendBillInfoComponent } from './components/send-bill-info/send-bill-info.component';
import { AddDebtorFormComponent } from './components/add-debtor-form/add-debtor-form.component';

const routes: Routes = [
  {path:'login', component : LoginComponent},
  {path:'home', component : HomeComponent},
  {path:'register', component : RegisterComponent},
  {path:'dashboard', component : DashboardComponent},
  {path:'companySearch', component : CompanySearchComponent},
  {path:'creditors', component : CreditorsComponent},
  {path:'debtors', component : DebtorsComponent},
  {path:'addUnregisteredDebtors', component : AddDebtorFormComponent},
  {path:'sendBillInfo', component : SendBillInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
