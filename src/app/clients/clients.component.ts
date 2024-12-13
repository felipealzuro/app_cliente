import { Component, OnInit } from '@angular/core';
import { Client } from '../client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-clients',
   imports: [ FormsModule,CommonModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  showForm: boolean = false;
  newClient: Client = {
    sharedKey: '',
    businessId: '',
    email: '',
    phone: '',
    dateAdded: '',
    name: '',
    startDate: '',
    endDate: ''
  };
  searchKey: string = '';
  clientService: any;

  constructor() { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients().subscribe((clients: Client[]) => this.clients = clients);
  }

  showCreateForm(): void {
    this.showForm = true;
  }

  createClient(): void {
    this.clientService.createClient(this.newClient).subscribe((client: any) => {
      this.clients.push(client);
      this.showForm = false;
      this.newClient = {
        sharedKey: '',
        businessId: '',
        email: '',
        phone: '',
        dateAdded: '',
        name: '',
        startDate: '',
        endDate: ''
      };
    });
  }

  searchClients(): void {
    if (this.searchKey) {
      this.clientService.getClientBySharedKey(this.searchKey).subscribe((client: any) => {
        this.clients = [client];
      });
    } else {
      this.getClients();
    }
  }

  exportClients(): void {
    // Lógica para exportar los clientes a un archivo .xls
  }

  editClient(client: Client): void {
    // Lógica para editar un cliente
  }
}


function editClient(_client: any, _Client: any) {
  throw new Error('Function not implemented.');
}

function constructor(_private: any, _clientService: any, _ClientService: any) {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

function showCreateForm() {
  throw new Error('Function not implemented.');
}

function createClient() {
  throw new Error('Function not implemented.');
}

function searchClients() {
  throw new Error('Function not implemented.');
}

function exportClients() {
  throw new Error('Function not implemented.');
}

