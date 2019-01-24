import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { NewUserComponent } from './components/new-user/new-user.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
  {path: 'vendors', component: VendorsComponent, canActivate: [AuthGuard] },
  {path: 'client/add', component: AddClientComponent, canActivate: [AuthGuard] },
  {path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard] },
  {path: 'clients/client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard] },
  {path: 'client/edit/:id', component: EditClientComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'new/user', component: NewUserComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}

]

@NgModule({
  exports:  [RouterModule],
  providers: [AuthGuard],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
