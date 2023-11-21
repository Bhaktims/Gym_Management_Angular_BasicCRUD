import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  
  {path:"home",component:HomeComponent ,title:"FUTURE-FIT | Home"},
  {path:"offers",component:OffersComponent},
  {path:"trainers",loadChildren:
                   () => import('./trainer/trainer.module')
                  .then(m =>m.TrainerModule),title:"FUTURE-FIT | Trainers"},
  {path:"members",loadChildren:
                  () => import('./members/members.module')
                 .then(m =>m.MembersModule),title:"FUTURE-FIT | Members"},
  
  {path:"",component:HomeComponent ,title:"FUTURE-FIT | Home"},  
  {path:"**",component:NopagefoundComponent,title:"FUTURE-FIT | No Page"}             
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
