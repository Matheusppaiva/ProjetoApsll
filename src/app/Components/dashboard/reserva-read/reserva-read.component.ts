import { ReservaService } from 'src/app/services/reserva.service';
import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../interface/reserva';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-reserva-read',
  templateUrl: './reserva-read.component.html',
  styleUrls: ['./reserva-read.component.scss']
})
export class ReservaReadComponent implements OnInit {

  reservas!: Reserva[];

  displayedColumns: string[] = ['Id','Nome', 'CPF', 'Entrada', 'Saida', 'Pagamento', 'QuantidadePessoas', 'preferencias', 'Acoes'];
  dataSource = new MatTableDataSource<any>();

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.reservaService.read().subscribe(reservas => {
      this.reservas = reservas

    })


  }

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
