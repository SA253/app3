import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  {path:'',pathMatch:'full', component:HomeComponent},
  {path:'add',component:AddComponent},
  {path:'list',component:ListComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'delete/:id', component:DeleteComponent},
  {path:'comments/:id', component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
