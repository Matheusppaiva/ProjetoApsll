import { Reserva } from './../../interface/reserva';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserva-update',
  templateUrl: './reserva-update.component.html',
  styleUrls: ['./reserva-update.component.scss']
})
export class ReservaUpdateComponent implements OnInit {

  reserva!: Reserva

  constructor(private reservaService: ReservaService, private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as any
    this.reservaService.readById(id).subscribe(reserva => {
      this.reserva = reserva
    });
  }

  updateReserva(): void {
    this.reservaService.update(this.reserva).subscribe(() => {
      this.reservaService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/dashboard'])
    })
  }

  cancel(): void {
    this.router.navigate(['/dashboard'])
  }

}


