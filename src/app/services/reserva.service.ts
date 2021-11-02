import { Injectable } from '@angular/core';
import { Reserva } from '../Components/interface/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  ListReserva: Reserva[] = [
    {nome: "matheus", cpf: 2294239840, entrada: 22.08, saida: 22.08, pagamento: "debito", quantidadePessoas: 10},
    {nome: "matheus", cpf: 2294239840, entrada: 22.08, saida: 22.08, pagamento: "debito", quantidadePessoas: 10},
    {nome: "Lucas", cpf: 2294239840, entrada: 22.08, saida: 22.08, pagamento: "debito", quantidadePessoas: 10},
    {nome: "matheus", cpf: 2294239840, entrada: 22.08, saida: 22.08, pagamento: "credito", quantidadePessoas: 10},
    {nome: "matheus", cpf: 2294239840, entrada: 22.08, saida: 22.08, pagamento: "debito", quantidadePessoas: 10},
    {nome: "matheus", cpf: 2294239840, entrada: 22.08, saida: 22.08, pagamento: "credito", quantidadePessoas: 10},
    {nome: "Thiago", cpf: 2294239840, entrada: 22.08, saida: 22.08, pagamento: "debito", quantidadePessoas: 10},
    {nome: "matheus", cpf: 2294239840, entrada: 22.08, saida: 22.08, pagamento: "debito", quantidadePessoas: 10},
    {nome: "matheus", cpf: 2294239840, entrada: 22.08, saida: 22.08, pagamento: "debito", quantidadePessoas: 10},

  ];

  constructor() { }

  getReserva() {
    return this.ListReserva.slice();
  }

  eliminarReserva(index: number) {
    this.ListReserva.splice(index, 1);
  }
}
