import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from '../../interface/reserva';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  reserva: Reserva = {
    name: "",
    cpf: 0,
    entrada: "",
    saida: "",
    pagamento: "",
    pessoas: 0,
    preferencia: ""
  }

  constructor(private _reservaService: ReservaService, private router: Router) { }

  ngOnInit(): void {
  }

  createReserva(): void {
    this._reservaService.create(this.reserva).subscribe(() => {
      this._reservaService.showMessage("Produto criado!!")
      this.router.navigate(['/dashboard'])
    })
  }

  cancel(): void {
    this.router.navigate(['/dashboard'])
  }

}
