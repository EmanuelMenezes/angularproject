import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AgendaService } from '../shared/agenda.service';

@Component({
  selector: 'app-form-agenda',
  templateUrl: './form-agenda.component.html',
  styleUrls: ['./form-agenda.component.scss']
})
export class FormAgendaComponent implements OnInit {

  public contactForm!: FormGroup
  public action: string = ''
  public id!: number;

  constructor(private fb: FormBuilder, private agendaService: AgendaService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group(
      {
        nome: [null, [Validators.required]],
        telefone: [null, [Validators.required]],
        id: null
      }
    )
    if (this.router.url.split('/')[3]) {
      this.action = "editar"
      this.id = Number(this.router.url.split("/")[3]);
      this.contactForm.patchValue(this.agendaService.getById(this.id)[0])
    }
  }

  onSave() {
    if (this.action == 'editar') {
      return this.agendaService.updateContact(this.id, this.contactForm.value) ? this.router.navigateByUrl('/agenda/lista') : this.toastr.error('Não foi possível salvar as alterações', "Erro")
    }
    else {
      this.agendaService.createContact(this.contactForm.value)
    }
    this.router.navigateByUrl('/agenda/lista')
    return
  }

}
