import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAgendaComponent } from './list-agenda/list-agenda.component';
import { FormAgendaComponent } from './form-agenda/form-agenda.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista'
  },
  {
    path: 'lista',
    component: ListAgendaComponent
  },
  {
    path: 'novo',
    component: FormAgendaComponent
  },
  {
    path: 'editar/:id',
    component: FormAgendaComponent
  },

]

@NgModule({
  declarations: [
    ListAgendaComponent,
    FormAgendaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AgendaModule { }
