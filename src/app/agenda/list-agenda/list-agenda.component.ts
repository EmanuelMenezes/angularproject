import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Agenda } from '../shared/agenda';
import { AgendaService } from '../shared/agenda.service';

@Component({
  selector: 'app-list-agenda',
  templateUrl: './list-agenda.component.html',
  styleUrls: ['./list-agenda.component.scss']
})
export class ListAgendaComponent implements OnInit {

  contatos: any = []

  constructor(private agendaService: AgendaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadContacts()
  }

  loadContacts() {
    let aux_contatos = this.agendaService.getAllContacts()
    if (aux_contatos) {
      this.contatos = aux_contatos;
    }
    else {
      this.toastr.error('Não foi possível carregar a listagem', "Erro")
    }
  }

  deleteContact(id: number) {
    this.agendaService.deleteContact(id) ? this.loadContacts() : this.toastr.error('Não foi possível deletar o contato', "Erro")


  }

}
