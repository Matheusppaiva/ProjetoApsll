import { ReservaService } from 'src/app/services/reserva.service';
import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../interface/reserva';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reserva-delete',
  templateUrl: './reserva-delete.component.html',
  styleUrls: ['./reserva-delete.component.scss']
})
export class ReservaDeleteComponent implements OnInit {

  reserva!: Reserva;

  constructor(private reservaService: ReservaService, private router: Router, private route: ActivatedRoute  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as any
    this.reservaService.readById(id).subscribe((reserva) => {
      this.reserva = reserva
    })
  }

  deleteReserva(): void {
    this.reservaService.delete(this.reserva.id as any).subscribe(() => {
      this.reservaService.showMessage('Producto excluido com sucesso!')
      this.router.navigate(['/dashboard'])
    })
  }

  cancel() {
    this.router.navigate(['/dashboard'])
  }

}
