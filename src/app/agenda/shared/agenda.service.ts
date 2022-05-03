import { Injectable } from '@angular/core';
import { Agenda } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  currentValueStr: string | null = ''
  currentValue: Agenda[] = []

  constructor() { }

  createContact(value: Agenda) {
    this.currentValueStr = localStorage.getItem("contatos");
    if (this.currentValueStr != null) {
      this.currentValue = JSON.parse(this.currentValueStr)
    }
    value.id = this.currentValue.length
    this.currentValue.push(value)
    localStorage.setItem("contatos", JSON.stringify(this.currentValue))
  }

  getAllContacts(): Agenda[] | boolean {
    let contacts = localStorage.getItem("contatos")
    if (contacts) {
      return JSON.parse(contacts)
    }
    else {
      return false
    }
  }

  getById(id: number) {
    let contacts = localStorage.getItem("contatos")
    if (contacts) {
      let contactsArray = JSON.parse(contacts)

      return contactsArray.filter((item: Agenda) => item.id == id)

    }
    else {
      false
    }

  }

  updateContact(id: number, value: Agenda) {
    let contacts = localStorage.getItem("contatos")
    if (contacts) {
      this.currentValue = JSON.parse(contacts)

      this.currentValue = this.currentValue.filter((item: Agenda) => item.id != id)
      this.currentValue.push(value)
      localStorage.setItem("contatos", JSON.stringify(this.currentValue))
      return true
    }
    else {
      return false

    }
  }

  deleteContact(id: number) {
    let contacts = localStorage.getItem("contatos")
    if (contacts) {
      let contactsArray = JSON.parse(contacts)

      localStorage.setItem("contatos", JSON.stringify(contactsArray.filter((item: Agenda) => item.id != id)))

      return true
    }
    else {
      return false
    }

  }

}
